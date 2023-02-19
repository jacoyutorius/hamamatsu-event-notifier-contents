import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify'
import { listContents } from './graphql/queries'
import { createContents as createContentsMutation, deleteContents as deleteContentsMutation } from './graphql/mutations'
import { CreateContentsInput } from './API';
import "@aws-amplify/ui-react/styles.css"
import {
  withAuthenticator,
  Grid,
  View,
  Menu,
  MenuItem,
  Heading,
  Card,
  Flex,
  TextField,
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Theme,
  ThemeProvider,
  TextAreaField,
  Link
} from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';

const initialFormState = {
  author: '',
  text: ''
}

const theme: Theme = {
  name: 'table-theme',
  tokens: {
    components: {
      table: {
        row: {
          hover: {
            backgroundColor: { value: '{colors.blue.20}' },
          },

          striped: {
            backgroundColor: { value: '{colors.blue.10}' },
          },
        },

        header: {
          color: { value: '{colors.blue.80}' },
          fontSize: { value: '{fontSizes.large}' },
        },

        data: {
          fontWeight: { value: '{fontWeights.semibold}' },
        },
      },
    },
  },
};


function App({ signOut }: any) {
  const [contents, setContents] = useState<CreateContentsInput[]>([])
  const [formData, setFormData] = useState(initialFormState)
  const [user, setUser] = useState<any>([])

  useEffect(() => {
    fetchContents()
  })

  useEffect(() => {
    fetchCurrentAuthenticatedUser()
  }, [])

  async function fetchCurrentAuthenticatedUser() {
    const { attributes }: any = await Auth.currentAuthenticatedUser();
    setUser(attributes)
    setFormData({...initialFormState, author: attributes.email})
  }

  async function fetchContents() {
    const apiData: any = await API.graphql({query: listContents})
    setContents(apiData.data.listContents.items)
  }

  async function createContents() {
    if (!formData.author || !formData.text) return;

    await API.graphql({query: createContentsMutation, variables: { input: formData }});
    setContents([...contents, formData])
    setFormData(initialFormState)
  }

  async function deleteContent({ id }: CreateContentsInput) {
    const newContentsArray = contents.filter(content => content.id !== id)

    setContents(newContentsArray)
    await API.graphql({query: deleteContentsMutation, variables: { input: { id }}})
  }

  return (
    <ThemeProvider theme={theme} colorMode="light">
      <View className="App" width="100%" padding={{ base: 0, large: '1rem' }}>
        <Grid
          templateColumns="1fr 1fr 1fr"
          templateRows="1fr 3fr 1fr"
        >
          <Card
            columnStart="1"
            columnEnd="-1"
          >
            <Menu triggerClassName="menu" menuAlign="start">
              <MenuItem onClick={signOut}>
                Sign Out
              </MenuItem>
            </Menu>
            <Heading level={2}>浜松市イベントBot</Heading>
          </Card>
          <Card columnStart="1" columnEnd="2">
            <Card>
              <Flex as="form" direction="column">
                <View padding="0.5rem">
                  <TextField
                    label="登録者"
                    descriptiveText="登録者はログインEmailとなります"
                    onChange={e => setFormData({
                      ...formData,
                      'author': e.target.value
                    })}
                    value={formData.author}
                    isReadOnly={true} 
                    isRequired={true} />
                </View>
                <View padding="0.5rem">
                  <TextAreaField
                    label="ツイートテキスト"
                    errorMessage="ツイートテキストは必須です"
                    onChange={e => setFormData({
                      ...formData,
                      'text': e.target.value
                    })}
                    value={formData.text}
                    isRequired={true} />
                </View>
                <View padding="0.5rem">
                  <Button type="submit" onClick={createContents} variation="primary">save</Button>
                </View>
              </Flex>
            </Card>
          </Card>
          <Card columnStart="2" columnEnd="-1" >
            <Table
              caption=""
              highlightOnHover={true}>
              <TableHead>
                <TableRow>
                  <TableCell as="th">Author</TableCell>
                  <TableCell as="th">Text</TableCell>
                  <TableCell as="th"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { contents.map((content) => {
                  return (
                    <TableRow key={content.id || content.author}>
                      <TableCell>{ content.author }</TableCell>
                      <TableCell>{ content.text }</TableCell>
                      <TableCell>
                        <Button onClick={() => deleteContent(content) } variation="destructive" size="small">Delete</Button>
                      </TableCell>
                    </TableRow>
                  )
                }) }
              </TableBody>
            </Table>
          </Card>
        </Grid>
      </View>
      <View className="footer">
        <Link href="https://github.com/jacoyutorius/hamamatsu-event-notifier-contents" color="#007EB9" isExternal={true}>
          Github
        </Link>
      </View>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
