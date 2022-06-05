import { MongoClient, ObjectId } from 'mongodb';
import Head from "next/head";
import React from 'react'
import MeetupDetail from '../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    console.log(props);
  return (
    <React.Fragment>
  
    <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content="nice places to Meet UP!"/>
    </Head>
      
    <MeetupDetail  image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}  />

    </React.Fragment>
  )
}
export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://Emre_DB:808OC7zLkQgVqzk1@cluster0.pvcaw.mongodb.net/meetups?retryWrites=true&w=majority")
    const db = client.db()
    const meetupsCollection = db.collection("meetups")
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()
    client.close()
    return {
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        })),
        fallback: false
    }
}
export async function getStaticProps (context) {
    
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect("mongodb+srv://Emre_DB:808OC7zLkQgVqzk1@cluster0.pvcaw.mongodb.net/meetups?retryWrites=true&w=majority")
    const db = client.db()
    const meetupsCollection = db.collection("meetups")
    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
      })
    client.close()
    
    // fetch meetups from the API
    return {
        props: {
            meetup: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
              },
        },
        revalidate: 10
    }
}

export default MeetupDetails







// import { MongoClient, ObjectId } from "mongodb";

// import MeetupDetail from "../components/meetups/MeetupDetail";

// function MeetupDetails(props) {
//   return (
//     <MeetupDetail
//       image={props.meetupData.image}
//       title={props.meetupData.title}
//       address={props.meetupData.address}
//       description={props.meetupData.description}
//     />
//   );
// }

// export async function getStaticPaths() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://Emre_DB:808OC7zLkQgVqzk1@cluster0.pvcaw.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection("meetups");

//   const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

//   client.close();

//   return {
//     fallback: false,
//     paths: meetups.map((meetup) => ({
//       params: { meetupId: meetup._id.toString() },
//     })),
//   };
// }

// export async function getStaticProps(context) {
//   // fetch data for a single meetup

//   const meetupId = context.params.meetupId;
//     console.log(meetupId);
//   const client = await MongoClient.connect(
//     "mongodb+srv://Emre_DB:808OC7zLkQgVqzk1@cluster0.pvcaw.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection("meetups");

//   const selectedMeetup = await meetupsCollection.findOne({
//     _id: ObjectId(meetupId),
//   });

//   client.close();

//   return {
//     props: {
//       meetupData: {
//         id: selectedMeetup._id.toString(),
//         title: selectedMeetup.title,
//         address: selectedMeetup.address,
//         image: selectedMeetup.image,
//         description: selectedMeetup.description,
//       },
//     },
//   };
// }

// export default MeetupDetails;
