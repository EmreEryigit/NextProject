import { useRouter } from 'next/router';
import React from 'react'
import Head from "next/head";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
    const router = useRouter();
    const addMeetupHandler = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enteredMeetupData)
        })
        const data = await response.json()
        console.log(data);
        router.push('/')
    }   
  return (
    <React.Fragment>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="nice places to Meet UP!"/>
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </React.Fragment>
  )
}

export default NewMeetupPage
