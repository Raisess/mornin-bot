import { default as TT } from "twitter";

type OAuth = {
  apiKey: string;
  apiKeySecret: string;
  accessToken: string;
  accessTokenSecret: string;
};

export default class Twitter {
  private readonly client: TT;

  constructor(oauth: OAuth) {
    this.client = new TT({
      consumer_key: oauth.apiKey,
      consumer_secret: oauth.apiKeySecret,
      access_token_key: oauth.accessToken,
      access_token_secret: oauth.accessTokenSecret,
    });
  }

  public async tweet(content: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.post("/statuses/update", { status: content }, (err) => {
        if (err) reject(err);

        resolve();
      });
    });
  }
}
