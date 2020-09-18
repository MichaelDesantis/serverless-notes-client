const dev = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-1prl504v9scaz"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://a1rv6wek6l.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_aDWleYkhg",
      APP_CLIENT_ID: "v5p5lk9c6msrpuuar7tnmr4el",
      IDENTITY_POOL_ID: "us-east-2:2e0766c0-e316-45a7-a732-b57b9547163e"
    },
    STRIPE_KEY: "pk_test_51HFNZeJiZMWxezs7Ug8nOVkwg6DqUfCEZM7FuF8ywYBfYClTmFeSp3bHPpJTtKr5xwDnudLvyFxifwaxtNL187RQ00ih9cqImA",
  };

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1mpvahh0ktuj9"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://vf5snuhn7i.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_pp1GqZZuA",
    APP_CLIENT_ID: "nm0oevbp3kb57bjiemi4e9nq",
    IDENTITY_POOL_ID: "us-east-2:ac420e5f-a305-4f03-b90a-b80ef801874f"
  },
  STRIPE_KEY: "pk_test_51HFNZeJiZMWxezs7Ug8nOVkwg6DqUfCEZM7FuF8ywYBfYClTmFeSp3bHPpJTtKr5xwDnudLvyFxifwaxtNL187RQ00ih9cqImA",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
}