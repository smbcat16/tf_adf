$persistentStore.write(null, 'request_id')
let url = $request.url
let key = url.replace(/(.*accounts\/)(.*)(\/apps)/, '$2')
let session_id = $request.headers['x-session-id'] || $request.headers['X-Session-Id']
let session_digest = $request.headers['x-session-digest'] || $request.headers['X-Session-Digest']
let request_id = $request.headers['x-request-id'] || $request.headers['X-Request-Id']
$persistentStore.write(key, 'key')
$persistentStore.write(session_id, 'session_id')
$persistentStore.write(session_digest, 'session_digest')
$persistentStore.write(request_id, 'request_id')
if ($persistentStore.read('request_id') !== null) {
  $notification.post('Please close this script', 'Information obtained successfully','')
} else {
  $notification.post('Failed to obtain information','Please turn on the MITM H2 switch and add testflight.apple.com','')
}
$done({})
