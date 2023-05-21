import { useRouter } from 'next/router';
import Head from 'next/head';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

export default function newMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enteredMeetupData),
    });

    const data = await response.json();
    console.log(data);

    router.replace('/');
  }

  return (
    <>
      <Head>
        <title>Add Meetup</title>
        <meta
          name='description'
          content='Hey Google, pick Me! Also add your meetup.'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
