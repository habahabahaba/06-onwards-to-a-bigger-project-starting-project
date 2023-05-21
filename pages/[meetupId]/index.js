import Head from 'next/head';

import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupId(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://habahabahaba:lhWXiRYzCnw32Cbv@cluster0.isrh8cj.mongodb.net/nextjs-meetups-app?retryWrites=true&w=majority'
  );
  const database = client.db();
  const meetupsCollection = database.collection('Meetups Collection');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // console.log(meetupId);

  const client = await MongoClient.connect(
    'mongodb+srv://habahabahaba:lhWXiRYzCnw32Cbv@cluster0.isrh8cj.mongodb.net/nextjs-meetups-app?retryWrites=true&w=majority'
  );
  const database = client.db();
  const meetupsCollection = database.collection('Meetups Collection');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        ...selectedMeetup,
        _id: selectedMeetup._id.toString(), // null,
        id: selectedMeetup._id.toString(),
      },

      // meetupData: {
      //   id: selectedMeetup._id.toString(),
      //   title: selectedMeetup.title,
      //   address: selectedMeetup.address,
      //   image: selectedMeetup.image,
      //   description: selectedMeetup.description,
      // },
    },
  };
}
