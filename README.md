# Google Chat alert plugin

This plugin helps to call Google Chat's incoming webhooks to send alert notifications on build start, success and failure.

This will be a useful plugin for those who are using Google Workspace, for whom there is no default alerting feature on Netlify (Which, granted, is a minority :) ).

**Instructions**

1. Create an incoming webhook on Google chat (https://developers.google.com/chat/how-tos/webhooks#step_1_register_the_incoming_webhook) and copy the webhook URL

2. Set the following environment variable (required) as the copied value
   NETLIFY_GOOGLE_CHAT_WEBHOOK

3. You will be alerted on the following events
   1. pre-build
   2. Build success
   3. build failure

Please feel free to raise issues/Pull Requests.
