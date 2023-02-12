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
  Button,
  Heading,
  Image,
  View,
  Card
} from "@aws-amplify/ui-react";
import { delimiter } from 'path';

const initialFormState = {
  author: '',
  text: ''
}

function App({ signOut }: any) {

  const [contents, setContents] = useState<CreateContentsInput[]>([])
  const [formData, setFormData] = useState(initialFormState)
  useEffect(() => {
    fetchContents()
  })

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
    <View className="App">
      <h1>Contents</h1>
      <input
        onChange={e => setFormData({
          ...formData,
          'author': e.target.value
        })}
        placeholder="Author"
        value={formData.author}></input>
      <textarea
        onChange={e => setFormData({
          ...formData,
          'text': e.target.value
        })}
        placeholder="Text"
        value={formData.text}></textarea>

      <button onClick={createContents}>save</button>

      <div style={{ marginBottom: 30 }}>
        { contents.map((content) => {
          return <div key={content.id || content.author}>
          <h2>{content.author}</h2>
          <p>{content.text}</p>
          <button onClick={() => deleteContent(content) }>Delete content</button>
        </div>
        }) }
      </div>

      {/* <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button> */}
    </View>
  );
}

export default withAuthenticator(App);
