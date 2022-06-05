import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import React from 'react'


function HomePage(props) {
  return (
      <React.Fragment>
    <Head>
        <title>Meetups</title>
        <meta name="description" content="nice places to Meet UP!"/>
    </Head>
      <MeetupList  meetups={props.meetups}/>
      </React.Fragment>
  )
}
export async function getStaticProps () {
    // fetch meetups from the API
    const client = await MongoClient.connect("mongodb+srv://Emre_DB:808OC7zLkQgVqzk1@cluster0.pvcaw.mongodb.net/meetups?retryWrites=true&w=majority")
    const db = client.db()
    const meetupsCollection = db.collection("meetups")
    const meetups = await meetupsCollection.find().toArray()
    client.close()
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                description: meetup.description,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10
    }
}

// export async function getServerSideProps (context) {
//     const req = context.req
//     const res = context.res
//     // fetch data
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
export default HomePage
