version: 0.2

phases:
  install:
    runtime-versions:
      nodejs: 20
    commands:
      - echo Installing dependencies...
      - npm ci || npm install

  build:
    commands:
      - echo Building the React app...
      - npm run build

  post_build:
    commands:
      - echo Deploying to S3...
      - aws s3 sync build/ s3://my-react-website-20 --delete

artifacts:
  files:
    - '*/'
  base-directory: build
