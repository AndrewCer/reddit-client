aws s3 sync . s3://andrew-cer-reddit-client --exclude ".git/*" --acl "public-read"
open http://andrew-cer-reddit-client.s3-website-us-west-2.amazonaws.com/
