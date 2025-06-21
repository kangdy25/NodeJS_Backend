import { lookup, resolve4, resolve6, reverse, resolveMx,
  resolveTxt, resolveNs, resolveSrv, resolveSoa, resolveCname, 
  resolvePtr, resolveNaptr, resolveCaa 
} from 'dns/promises';

// IP 주소
const result = await lookup('google.com');
console.log(result); // { address: '142.250.76.142', family: 4 }

// IPv4
const addresses = await resolve4('google.com');
console.log(addresses); // [ '172.217.161.206' ]

// IPv6
const aaaaRecords = await resolve6('google.com');
console.log(aaaaRecords); // [ '2404:6800:400a:813::200e' ]

// 역방향 DNS
const reverseResult = await reverse('8.8.8.8');
console.log(reverseResult); // [ 'dns.google' ]

// 도메인 메일 서버 MX Record를 조회
const mxRecords = await resolveMx('gmail.com');
console.log(mxRecords);
// [
//   { exchange: 'alt1.gmail-smtp-in.l.google.com', priority: 10 },
//   { exchange: 'alt4.gmail-smtp-in.l.google.com', priority: 40 },
// ...