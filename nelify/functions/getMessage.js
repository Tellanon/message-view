exports.handler = async (event) => {
  const recordId = event.queryStringParameters.response_id;

  if (!recordId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing response_id." }),
    };
  }

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = "appn6Nd3NlUTEDi8w";
  const tableName = "Anonymous Messages";

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}/${recordId}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Airtable fetch error: ${response.status}`);
    }

    const data = await response.json();
    const message = data.fields?.Message || null;

    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "There was an error retrieving your message." }),
    };
  }
};
