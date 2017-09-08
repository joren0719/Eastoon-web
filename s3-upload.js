const s3 = require('s3');
const path = require('path');


const Uploader = new Promise((resolve, reject) => {
  const client = s3.createClient({
  s3Options: {
      accessKeyId: 'AKIAIL65LB5XNGV4ZAFA',
      secretAccessKey: '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',
      region: 'us-west-2',
      sslEnabled: true,
    },
  });
  const uploader = client.uploadDir({
    localDir: 'src/',
    deleteRemoved: true,
    s3Params: {
      Bucket: 'eastoon'
    },
  });
  uploader.on('error', reject);
  uploader.on('end', resolve);
});
