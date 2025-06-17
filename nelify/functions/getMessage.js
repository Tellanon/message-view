const fetch = require('node-fetch');

exports.handler = async function(event) {
  const recordId = event.queryStringParameters.response_id;
  if (!recordId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing response_id" }),
    };
  }

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = "appn6Nd3NlUTEDi8w";
  const tableName = "Anonymous Messages";

  try {
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}/${recordId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = await response.json();
    const message = data.fields?.Message || "Message not found.";

    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "There was an error retrieving your message." }),
    };
  }
};
