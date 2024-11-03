const contentful = require("contentful");
const dotenv = require("dotenv");

// Load environment variables from .env (only in development)
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// Access Contentful credentials from environment variables
const space = process.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Create a Contentful client
const client = contentful.createClient({
  space: space,
  accessToken: accessToken,
});

exports.handler = async function (event) {
  try {
    // Fetch entries for projects
    const projectResponse = await client.getEntries({
      content_type: "project",
    });
    const projects = projectResponse.items.map((item) => {
      const { fields, sys } = item;
      const id = sys.id;
      return {
        id,
        ...fields,
        image: fields.image?.fields?.file?.url, 
      };
    });

    // Fetch entries for navigation links
    const navLinksResponse = await client.getEntries({
      content_type: "navigationLink",
    });
    const navigationLinks = navLinksResponse.items.map((item) => {
      const { fields, sys } = item;
      return {
        id: sys.id,
        text: fields.text,
        href: fields.href,
      };
    });

    // Return combined data
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins for development
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ projects, navigationLinks }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: "Error fetching data",
        details: error.message,
      }),
    };
  }
};
