let header = $response.header;
header['x-oss-expiration'] = 'expiry-date="Sun, 23 Jun 2025 00:00:00 GMT", rule-id="35c19082-7e3a-400c-a915-575b550ea44e"';

$done({header});
