import { MongoClient } from 'mongodb';

// api/new-meetup

export default async function newMeeetupHandler(request, response) {
  if (request.method === 'POST') {
    try {
      const data = request.body;

      const client = await MongoClient.connect(
        'mongodb+srv://habahabahaba:lhWXiRYzCnw32Cbv@cluster0.isrh8cj.mongodb.net/nextjs-meetups-app?retryWrites=true&w=majority'
      );
      const database = client.db();

      const meetupsCollection = database.collection('Meetups Collection');

      const result = await meetupsCollection.insertOne(data);
      console.log(response);
      client.close();

      response.status(201).json('Meetup was uploaded!');
    } catch (error) {
      console.error(error);
    }
  }
}
