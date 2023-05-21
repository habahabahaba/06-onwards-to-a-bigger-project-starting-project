import { MongoClient } from 'mongodb';

import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup.',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup.',
  },
];

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Next React Meetups</title>
        <meta name='description' content='Hey Google, pick Me! Also meetups!' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const client = await MongoClient.connect(
      'mongodb+srv://habahabahaba:lhWXiRYzCnw32Cbv@cluster0.isrh8cj.mongodb.net/nextjs-meetups-app?retryWrites=true&w=majority'
    );
    const database = client.db();
    const meetupsCollection = database.collection('Meetups Collection');
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
      props: {
        meetups: meetups.map((meetup) => ({
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
        })),
      },
      revalidate: 10, // number of seconds betwen page server-side regeneration
    };
  } catch (error) {
    console.error(error);
  }
}

// export async function getServerSideProps(context){
//   const request=context.req
//   const response=context.res

//   // fetch data...
//   return {
//     props:{
//       meetups:DUMMY_MEETUPS,
//     }
//   }
// }
if (1 >= 2 || 5 !== 5 || false) router.push((el) => el + 9);
