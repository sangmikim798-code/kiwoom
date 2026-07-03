/* ============================================================
   디지털 ARS · 간편모드 인터랙티브 목업
   ============================================================ */

/* ---------- SVG 아이콘 ---------- */
const I = {
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-5 4 3 7-8"/><path d="M16 7h4v4"/></svg>',
  order:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
  wallet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18"/><circle cx="16.5" cy="14" r="1.3" fill="currentColor"/></svg>',
  transfer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13l-3-3M20 16H7l3 3"/></svg>',
  ipo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 16l-5 2.7 1-5.5-4-3.9 5.5-.8z"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9.5 12l2 2 3.5-4"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>',
  future:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-6 4 14 2-8h6"/></svg>',
  option:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M8 12h8"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  fund:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 109-9h-9z"/><path d="M12 3v9h9"/></svg>',
  pension:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/></svg>',
  els:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 14l3-3 2 2 5-5"/></svg>',
  isa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
  wrap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l9-5 9 5-9 5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  bond:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 9v6M18 9v6"/></svg>',
  ai:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="6" width="14" height="12" rx="3"/><path d="M12 6V3M9 11h.01M15 11h.01M9 15h6"/><path d="M2 12h2M20 12h2"/></svg>',
  rp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 8h4a2.5 2.5 0 010 5H9.5V8zm0 5v4M9.5 13h5"/></svg>',
  headset:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13v-1a8 8 0 0116 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19a4 4 0 01-4 3h-2"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.5 21a2 2 0 01-3 0"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>',
  chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>',
  down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H8l-4 4z"/></svg>',
  agent:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13v-1a8 8 0 0116 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/></svg>',
  power:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v9"/><path d="M6.5 7a8 8 0 1011 0"/></svg>',
  key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.7 12.3L20 3"/><path d="M16 5l3 3"/><path d="M13.5 7.5l2.5 2.5"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6M10 17h5"/></svg>',
  idcard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2.2"/><path d="M5.8 16c0-1.8 1.4-3 3.2-3s3.2 1.2 3.2 3"/><path d="M15 10h4M15 14h3"/></svg>',
  cert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h5"/><circle cx="15" cy="16" r="3"/><path d="M13.6 16l1 1 1.8-1.9"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3l1.8 4.5-2.2 1.4a11 11 0 005.5 5.5l1.4-2.2L19 16v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/></svg>',
};

/* ---------- 데이터 ---------- */
const FAV = [
  {k:'ID·계좌조회/PW초기화',     lb:'ID·계좌조회<br>PW초기화',      ic:'key',    go:'result', rk:'idpw'},
  {k:'비대면업무 신청현황',      lb:'비대면업무<br>신청현황',       ic:'order',  go:'result', rk:'untactstatus'},
  {k:'계좌잔고 및 거래내역조회', lb:'계좌잔고 및<br>거래내역조회',  ic:'wallet', go:'list'},
  {k:'계좌사고 등록/해지',       lb:'계좌사고<br>등록/해지',        ic:'power',  go:'result', rk:'accidentcancel'},
  {k:'고객확인등록(CDD/EDD)',    lb:'고객확인등록<br>(CDD/EDD)',    ic:'idcard', go:'result', rk:'cdd'},
  {k:'서류발급 및 신청내역조회', lb:'서류발급 및<br>신청내역조회',  ic:'cert',   go:'result', rk:'certissue'},
  {k:'신용/대출 만기연장',       lb:'신용/대출<br>만기연장',        ic:'clock',  go:'result', rk:'creditext'},
  {k:'공모주 청약',              lb:'공모주<br>청약',               ic:'ipo',    go:'result', rk:'ipo'},
  {k:'간편/공동인증 관리',       lb:'간편/공동<br>인증관리',        ic:'shield', go:'result', rk:'authmgmt'},
];

/* 자주 찾는 서비스에 추가 가능한 후보(빈 슬롯 클릭 → 선택해서 FAV에 추가) */
let FAV_ADD = [
  {k:'펀드 조회·거래',   lb:'펀드<br>조회·거래',   ic:'fund',     go:'result'},
  {k:'연금저축 조회',    lb:'연금저축<br>조회',     ic:'pension',  go:'result'},
  {k:'해외주식 잔고조회', lb:'해외주식<br>잔고조회', ic:'globe',    go:'result'},
  {k:'환전 신청',        lb:'환전<br>신청',         ic:'transfer', go:'result'},
  {k:'ELS/DLS 조회',     lb:'ELS/DLS<br>조회',      ic:'els',      go:'result'},
  {k:'자동이체 관리',     lb:'자동이체<br>관리',     ic:'clock',    go:'result'},
];

const CATS = {
  '금융상품':[
    {k:'펀드',ic:'fund'},{k:'연금저축',ic:'pension'},{k:'ELS/ELB',ic:'els'},
    {k:'ISA',ic:'isa'},{k:'Wrap',ic:'wrap'},{k:'국내채권',ic:'bond'},
    {k:'해외채권',ic:'globe'},{k:'AI자산관리',ic:'ai'},{k:'원화RP',ic:'rp'},
  ],
  '국내주식':[
    {k:'현재가',ic:'chart'},{k:'국내지수',ic:'globe'},{k:'주문/체결',ic:'order'},
    {k:'잔고/거래',ic:'wallet'},{k:'관심종목',ic:'els'},{k:'조건검색',ic:'search'},
    {k:'투자정보',ic:'isa'},{k:'테마/업종',ic:'wrap'},{k:'공모주',ic:'ipo'},
  ],
  '해외주식':[
    {k:'현재가',ic:'chart'},{k:'해외지수',ic:'globe'},{k:'환전',ic:'transfer'},
    {k:'주문/체결',ic:'order'},{k:'잔고조회',ic:'wallet'},{k:'관심종목',ic:'els'},
    {k:'시간외거래',ic:'clock'},{k:'배당내역',ic:'rp'},{k:'투자정보',ic:'isa'},
  ],
  '자산뱅킹':[
    {k:'계좌이체',ic:'transfer'},{k:'입출금',ic:'wallet'},{k:'대출',ic:'bond'},
    {k:'원화RP',ic:'rp'},{k:'외화',ic:'globe'},{k:'연금',ic:'pension'},
    {k:'세금/리포트',ic:'isa'},{k:'자동이체',ic:'clock'},{k:'혜택',ic:'ipo'},
  ],
};

const SISE = [
  {k:'현재가', d:'국내주식 가격, 거래량, 호가 등 확인', ic:'chart', go:'index'},
  {k:'국내/해외지수', d:'코스피, 코스닥, 다우존스 등 국내/해외 지수확인', ic:'globe', go:'index'},
  {k:'선물시세', d:'선물 가격, 거래량 등 확인', ic:'future', go:'index'},
  {k:'옵션시세', d:'콜/풋 옵션의 가격, 거래량 등 확인', ic:'option', go:'index'},
  {k:'시간외단일 현재가', d:'시간외단일시장의 국내주식 가격, 거래량 등 확인', ic:'clock', go:'index'},
];

/* 시안 2 인라인 확장 카테고리 */
const INLINE = [
  {k:'시세/지수조회', ic:'chart', subs:[
    {t:'현재가', d:'국내주식 가격·거래량·호가'},
    {t:'국내/해외지수', d:'코스피·코스닥·다우존스 등'},
    {t:'선물시세', d:'선물 가격·거래량'},
    {t:'옵션시세', d:'콜/풋 옵션 가격·거래량'},
    {t:'시간외단일 현재가', d:'시간외단일시장 가격'},
  ]},
  {k:'주문/체결안내', ic:'order', subs:[
    {t:'국내주식 주문', d:'매수·매도 주문'},
    {t:'체결 내역', d:'당일 체결 확인'},
    {t:'미체결 조회', d:'정정·취소'},
    {t:'예약주문', d:'장 시작 전 예약'},
  ]},
  {k:'잔고/거래내역', ic:'wallet', subs:[
    {t:'보유 잔고', d:'평가손익 확인'},
    {t:'거래내역', d:'기간별 거래'},
    {t:'입출금 내역', d:'예수금 흐름'},
    {t:'실현손익', d:'기간 손익'},
  ]},
  {k:'이체/서비스', ic:'transfer', subs:[
    {t:'계좌이체', d:'은행·증권 이체'},
    {t:'출금가능금액', d:'예수금 조회'},
    {t:'자동이체', d:'정기 이체 관리'},
  ]},
  {k:'공모주청약', ic:'ipo', subs:[
    {t:'진행 공모주', d:'청약 일정 안내'},
    {t:'청약하기', d:'청약 신청'},
    {t:'배정/환불', d:'결과 확인'},
  ]},
  {k:'사고신고/부가서비스', ic:'shield', subs:[
    {t:'분실/사고 신고', d:'카드·계좌 신고'},
    {t:'인증센터', d:'공동·금융인증서'},
    {t:'알림 설정', d:'푸시·체결 알림'},
  ]},
];

/* 자주 찾는 서비스 → 상세 메뉴 리스트 (시안 1) */
const DETAIL = {
  '계좌잔고 및 거래내역조회':[
    {k:'계좌잔고·예수금 조회', d:'보유종목 평가손익·예수금 잔액', ic:'wallet', go:'holdings'},
    {k:'거래 내역',           d:'기간별 매매·입출금 내역',       ic:'order',  go:'trades'},
    {k:'체결 내역',           d:'당일 체결된 주문 확인',         ic:'clock',  go:'filled'},
  ],
  '거래내역/체결내역':[
    {k:'거래 내역', d:'기간별 매매·입출금 내역', ic:'order', go:'trades'},
    {k:'체결 내역', d:'당일 체결된 주문 확인',   ic:'clock', go:'filled'},
  ],
  '주문/체결안내':[
    {k:'미체결 조회', d:'정정·취소 가능한 주문 확인', ic:'order',  go:'unfilled'},
    {k:'체결 내역',   d:'당일 체결된 주문 확인',       ic:'clock',  go:'filled'},
    {k:'예약주문 현황', d:'장 시작 전 예약한 주문',     ic:'isa',    go:'reserved'},
  ],
  '잔고/거래내역':[
    {k:'보유 잔고',   d:'평가손익·보유종목 확인', ic:'wallet',  go:'holdings'},
    {k:'거래 내역',   d:'기간별 매매 내역',       ic:'order',   go:'trades'},
    {k:'입출금 내역', d:'예수금 입출금 흐름',     ic:'transfer',go:'cashflow'},
    {k:'실현손익',    d:'기간별 실현손익 집계',   ic:'chart',   go:'pnl'},
  ],
  '이체/서비스':[
    {k:'계좌 이체',     d:'은행·증권 계좌로 이체',   ic:'transfer',go:'transfer'},
    {k:'출금가능금액',  d:'출금 가능 예수금 조회',   ic:'wallet',  go:'withdrawable'},
    {k:'자동이체 관리', d:'정기 이체 등록·해지',     ic:'clock',   go:'autotransfer'},
  ],
  '공모주청약':[
    {k:'진행중 공모주', d:'청약 일정·경쟁률 안내', ic:'ipo', go:'ipolist'},
    {k:'청약 결과',     d:'배정·환불 결과 확인',   ic:'isa', go:'iporesult'},
  ],
  '사고신고/부가서비스':[
    {k:'분실·사고 신고', d:'카드·계좌 사고 접수',     ic:'shield', go:'report'},
    {k:'인증센터',       d:'공동·금융인증서 관리',     ic:'shield', go:'cert'},
    {k:'알림 설정',      d:'체결·입출금 푸시 알림',    ic:'bell',   go:'noti'},
  ],
};

/* ---------- 결과 화면 렌더러 ---------- */
const won = n => n.toLocaleString('ko-KR');

const RESULT = {
  index: indexResult,

  /* ID·계좌번호 조회 / PW초기화 */
  idpw(){
    const items = [
      {k:'아이디(ID) 조회', d:'가입 정보로 아이디 찾기', ic:'search', go:'idpwfind'},
      {k:'계좌번호 조회', d:'본인 명의 계좌번호 확인', ic:'wallet', go:'acctfind'},
      {k:(isV21Ver()?'ID비밀번호 재설정':'ID비밀번호 초기화'), d:'본인인증 후 로그인 비밀번호 재설정', ic:'key', go:'idpwreset'},
    ];
    if(isV21Ver()) items.push({k:'장기미사용 ID 제한해제', d:'1년 이상 미사용 계정의 로그인 제한 해제', ic:'clock', go:'idrelease'});
    return menuList(items);
  },

  /* ID·계좌번호 조회 ── 본인 명의 계좌번호 조회 */
  acctfind(){
    const authed = sessionAuthed;   // 본인인증 완료 시 마스킹 해제하고 전체 계좌번호 표시
    const acc=[
      {full:'키움 종합 1234-5678-90',  mask:'키움 종합 1234-56**-**',  d:'종합위탁 · 2019.03.14 개설', rep:true},
      {full:'키움 CMA 9876-5432-10',   mask:'키움 CMA 9876-54**-**',   d:'CMA · 2021.08.02 개설'},
      {full:'키움 연금저축 5555-1234-56', mask:'키움 연금저축 5555-12**-**', d:'연금저축계좌 · 2022.05.10 개설'},
    ];
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">실명 확인</div><div class="v">홍길동</div></div>
      <div class="data-row"><div class="k">본인인증</div><div class="v up">${authed?'본인인증 완료':'인증 필요'}</div></div>
    </div>
    <div class="sec-title" style="padding-top:0">본인 명의 계좌 ${acc.length}</div>
    <div class="list">` + acc.map(a=>`
      <div class="row" style="cursor:default">
        <div class="ic">${I.wallet}</div>
        <div class="tx"><div class="t">${authed?a.full:a.mask}${a.rep?` <span class="tag live">대표</span>`:''}</div><div class="d">${a.d}</div></div>
      </div>`).join('') + `</div>
    <div class="notice">${authed?'본인인증이 완료되어 계좌번호 전체가 표시됩니다.':'보안을 위해 계좌번호 일부는 마스킹(**)되어 표시됩니다.'}</div>`;
  },

  /* ID조회 ── 아이디(ID) 조회 결과 */
  idpwfind(){
    const authed = sessionAuthed;   // 본인인증 완료 시 마스킹 해제하고 전체 아이디 표시
    const ids=[
      {full:'kiwoom_hong',   mask:'kiwoom_h****', d:'2019.03.14 가입 · 최근 로그인 2026.06.21', rep:true},
      {full:'honggildong90', mask:'hong****90',   d:'2021.08.02 가입 · 최근 로그인 2025.11.02'},
    ];
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">실명 확인</div><div class="v">홍길동</div></div>
      <div class="data-row"><div class="k">본인인증</div><div class="v up">${authed?'본인인증 완료':'인증 필요'}</div></div>
      <div class="data-row"><div class="k">가입일</div><div class="v">2019.03.14</div></div>
    </div>
    <div class="sec-title" style="padding-top:0">회원님의 아이디</div>
    <div class="list">` + ids.map(x=>`
      <div class="row" style="cursor:default">
        <div class="ic">${I.search}</div>
        <div class="tx"><div class="t">${authed?x.full:x.mask}${x.rep?` <span class="tag live">대표</span>`:''}</div><div class="d">${x.d}</div></div>
      </div>`).join('') + `</div>
    <div class="notice">${authed?'본인인증이 완료되어 전체 아이디가 표시됩니다.':'보안을 위해 아이디 일부는 마스킹(****)되어 표시됩니다.'}</div>`;
  },

  /* PW초기화 ── 비밀번호 초기화(재설정) */
  idpwreset(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">아이디</div><div class="v">kiwoom_h****</div></div>
      <div class="data-row"><div class="k">본인인증</div><div class="v up">휴대폰 인증 완료</div></div>
    </div>
    <div class="auth-info" style="margin:0 16px">
      <div class="ir"><span class="k">새 비밀번호</span>
        <input class="ir-input" type="password" autocomplete="new-password" placeholder="새 비밀번호 입력"></div>
      <div class="ir"><span class="k">비밀번호 확인</span>
        <input class="ir-input" type="password" autocomplete="new-password" placeholder="비밀번호 다시 입력"></div>
    </div>
    <div class="notice" style="margin-top:12px">영문·숫자·특수문자를 조합해 8~20자로 설정해 주세요. 직전에 사용한 비밀번호는 다시 사용할 수 없습니다.</div>
    <div class="primary-btn" data-flash="비밀번호가 재설정되었습니다. 새 비밀번호로 다시 로그인해 주세요. (시연용)">비밀번호 재설정</div>`;
  },

  /* 장기미사용 ID 제한해제 — 1년 이상 미로그인 계정 제한 상태 + 해제 (실데이터) */
  idrelease(){
    const authed = sessionAuthed;   // 인증 완료 시 아이디 전체 표시
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">아이디</div><div class="v">${authed?'honggildong90':'hong****90'}</div></div>
      <div class="data-row"><div class="k">계정 상태</div><div class="v down">로그인 제한 (장기미사용)</div></div>
      <div class="data-row"><div class="k">마지막 로그인</div><div class="v">2025.11.02</div></div>
      <div class="data-row"><div class="k">제한 적용일</div><div class="v">2026.11.02</div></div>
      <div class="data-row"><div class="k">본인인증</div><div class="v up">${authed?'본인인증 완료':'인증 필요'}</div></div>
    </div>
    <div class="sec-title" style="padding-top:0">제한 안내</div>
    <div class="list">
      <div class="row" style="cursor:default">
        <div class="ic">${I.clock}</div>
        <div class="tx"><div class="t">장기미사용 로그인 제한 <span class="tag wait">제한중</span></div><div class="d">최근 1년 이상 로그인 이력이 없어 계정이 잠금되었습니다.</div></div>
      </div>
    </div>
    <div class="notice">본인인증 후 제한을 해제하면 다시 로그인하실 수 있습니다. 해제 후에도 장기간 미접속 시 재제한될 수 있습니다.</div>
    <div class="primary-btn" data-flash="장기미사용 ID 제한이 해제되었습니다. 다시 로그인하실 수 있습니다. (시연용)">제한 해제</div>`;
  },

  /* 간편비밀번호(PIN) 변경 */
  idpwpin(){
    pinReset();   // 화면 진입 시 입력버퍼 초기화 (이후 키 입력은 부분 DOM 갱신)
    const keys = [1,2,3,4,5,6,7,8,9,'',0,'⌫'];
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">아이디</div><div class="v">kiwoom_h****</div></div>
      <div class="data-row"><div class="k">간편비밀번호(PIN)</div><div class="v">등록됨 · 6자리</div></div>
    </div>
    <div class="pin-wrap">
      <div class="pin-entry">
        <div class="pin-guide" id="pinGuide">새로운 간편비밀번호<br>6자리를 입력해 주세요</div>
        <div class="pin-dots" id="pinDots"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      </div>
      <div class="pin-pad">` + keys.map(k=> k===''
        ? `<div class="pin-key blank"></div>`
        : `<div class="pin-key" data-pinkey="${k==='⌫'?'back':k}">${k}</div>`).join('') + `</div>
    </div>
    <div class="notice">생년월일, 연속된 숫자(예: 123456), 동일한 숫자(예: 111111)는 사용할 수 없습니다.</div>`;
  },

  /* 비대면업무 신청현황 */
  untactstatus(){
    const items=[
      {k:'비대면 계좌개설', d:'종합위탁계좌 · 2026.06.20 신청', st:'done', lb:'완료', rk:'untactacct'},
      {k:'출금계좌등록', d:'신한 110-***-**56 · 2026.06.24 신청', st:'done', lb:'완료', rk:'untactwithdraw'},
      {k:'모바일 OTP 발급', d:'iPhone 15 Pro · 2026.06.28 신청', st:'wait', lb:'처리중', rk:'untactotp'},
      {k:'OTP 사고해지', d:'분실 신고 · 2026.06.26 신청', st:'done', lb:'완료', rk:'untactotpcancel'},
      {k:'계좌폐쇄', d:'CMA 9876-54** · 2026.06.19 신청', st:'live', lb:'반려', rk:'untactclose'},
      {k:'계좌비밀번호 재설정', d:'종합 1234-5678 · 2026.06.27 신청', st:'done', lb:'완료', rk:'untactpw'},
    ];
    return `<div class="list">` + items.map(x=>`
      <div class="row" data-s1go="result" data-rk="${x.rk}" data-fk="${x.k}">
        <div class="ic">${I.order}</div>
        <div class="tx"><div class="t">${x.k}</div><div class="d">${x.d}</div></div>
        <span class="tag ${x.st}">${x.lb}</span>
        <div class="chev">${I.chev}</div>
      </div>`).join('') + `</div>
    <div class="notice">최근 3개월 이내 비대면으로 신청한 업무의 처리 현황입니다. 항목을 선택하면 상세 진행 상황을 볼 수 있습니다.</div>`;
  },

  /* 비대면 ── 계좌개설 (완료) */
  untactacct(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">접수번호</div><div class="v">2026-0620-00123</div></div>
      <div class="data-row"><div class="k">신청일시</div><div class="v">2026.06.20 14:32</div></div>
      <div class="data-row"><div class="k">처리상태</div><div class="v"><span class="tag done">완료</span></div></div>
    </div>`
    + untactSteps(['신청접수','서류심사','개설완료'], 3) +
    `<div class="sec-title">신청 내용</div>
    <div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">계좌 종류</div><div class="v">종합위탁계좌</div></div>
      <div class="data-row"><div class="k">투자성향</div><div class="v">적극투자형</div></div>
      <div class="data-row"><div class="k">연계 출금계좌</div><div class="v">신한 110-***-**56</div></div>
    </div>
    <div class="primary-btn" data-flash="개설된 계좌 정보로 이동합니다. (시연용)">개설 계좌 보기</div>
    <div class="notice">개설이 완료되어 즉시 거래가 가능합니다. 계좌번호는 ‘계좌번호 조회’에서 확인하세요.</div>`;
  },

  /* 비대면 ── 출금계좌등록 (완료) */
  untactwithdraw(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">접수번호</div><div class="v">2026-0624-00210</div></div>
      <div class="data-row"><div class="k">신청일시</div><div class="v">2026.06.24 16:05</div></div>
      <div class="data-row"><div class="k">처리상태</div><div class="v"><span class="tag done">완료</span></div></div>
    </div>`
    + untactSteps(['등록 신청','계좌 인증','등록 완료'], 3) +
    `<div class="sec-title">신청 내용</div>
    <div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">등록 계좌</div><div class="v">신한은행 110-***-**56</div></div>
      <div class="data-row"><div class="k">인증 방식</div><div class="v">1원 계좌인증</div></div>
      <div class="data-row"><div class="k">등록일</div><div class="v">2026.06.24</div></div>
    </div>
    <div class="primary-btn" data-flash="등록된 출금계좌로 출금 화면으로 이동합니다. (시연용)">출금하기</div>
    <div class="notice">등록된 출금계좌로 즉시 출금·이체가 가능합니다.</div>`;
  },

  /* 비대면 ── 모바일 OTP 발급 (처리중) */
  untactotp(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">접수번호</div><div class="v">2026-0628-00377</div></div>
      <div class="data-row"><div class="k">신청일시</div><div class="v">2026.06.28 10:42</div></div>
      <div class="data-row"><div class="k">처리상태</div><div class="v"><span class="tag wait">처리중</span></div></div>
    </div>`
    + untactSteps(['발급 신청','본인 인증','발급 완료'], 1) +
    `<div class="sec-title">신청 내용</div>
    <div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">OTP 종류</div><div class="v">모바일 OTP</div></div>
      <div class="data-row"><div class="k">등록 기기</div><div class="v">iPhone 15 Pro</div></div>
      <div class="data-row"><div class="k">처리 예정</div><div class="v">본인 인증 후 즉시</div></div>
    </div>
    <div class="primary-btn warn" data-flash="모바일 OTP 발급 신청을 취소했습니다. (시연용)">신청 취소</div>
    <div class="notice">모바일 OTP는 본인 인증 완료 후 등록 기기에서 즉시 사용할 수 있습니다.</div>`;
  },

  /* 비대면 ── OTP 사고해지 (완료) */
  untactotpcancel(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">접수번호</div><div class="v">2026-0626-00301</div></div>
      <div class="data-row"><div class="k">신청일시</div><div class="v">2026.06.26 13:20</div></div>
      <div class="data-row"><div class="k">처리상태</div><div class="v"><span class="tag done">완료</span></div></div>
    </div>`
    + untactSteps(['해지 신청','본인 확인','해지 완료'], 3) +
    `<div class="sec-title">신청 내용</div>
    <div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">대상 OTP</div><div class="v">모바일 OTP</div></div>
      <div class="data-row"><div class="k">사고 사유</div><div class="v">분실</div></div>
      <div class="data-row"><div class="k">해지일</div><div class="v">2026.06.26</div></div>
    </div>
    <div class="primary-btn" data-flash="모바일 OTP 재발급 화면으로 이동합니다. (시연용)">OTP 재발급</div>
    <div class="notice">사고해지 후에는 새 OTP를 발급받아야 보안매체 인증을 사용할 수 있습니다.</div>`;
  },

  /* 비대면 ── 계좌폐쇄 (반려) */
  untactclose(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">접수번호</div><div class="v">2026-0619-00088</div></div>
      <div class="data-row"><div class="k">신청일시</div><div class="v">2026.06.19 15:33</div></div>
      <div class="data-row"><div class="k">처리상태</div><div class="v"><span class="tag live">반려</span></div></div>
    </div>`
    + untactSteps(['폐쇄 신청','자산 확인','폐쇄 완료'], 1, true) +
    `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">반려 사유</div><div class="v">잔여 자산 존재</div></div>
      <div class="data-row"><div class="k">대상 계좌</div><div class="v">키움 CMA 9876-54**-**</div></div>
    </div>
    <div class="notice" style="text-align:left;margin:0 18px 12px">계좌에 예수금·보유종목이 남아 있어 폐쇄가 반려되었습니다. 잔여 자산 출금·이전 후 다시 신청해 주세요.</div>
    <div class="primary-btn" data-flash="잔여 자산 정리 후 계좌폐쇄를 다시 신청합니다. (시연용)">잔여 자산 정리하기</div>`;
  },

  /* 비대면 ── 계좌비밀번호 재설정 (완료) */
  untactpw(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">접수번호</div><div class="v">2026-0627-00455</div></div>
      <div class="data-row"><div class="k">신청일시</div><div class="v">2026.06.27 11:50</div></div>
      <div class="data-row"><div class="k">처리상태</div><div class="v"><span class="tag done">완료</span></div></div>
    </div>`
    + untactSteps(['재설정 신청','본인 인증','재설정 완료'], 3) +
    `<div class="sec-title">신청 내용</div>
    <div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">대상 계좌</div><div class="v">키움 종합 1234-5678</div></div>
      <div class="data-row"><div class="k">인증 방식</div><div class="v">휴대폰 본인인증</div></div>
      <div class="data-row"><div class="k">적용일</div><div class="v">2026.06.27</div></div>
    </div>
    <div class="notice">계좌 비밀번호가 재설정되었습니다. 다음 거래부터 새 비밀번호를 사용해 주세요.</div>`;
  },

  /* 계좌사고 등록/해지 */
  accidentcancel(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">계좌</div><div class="v">키움 종합 1234-5678</div></div>
      <div class="data-row"><div class="k">현재 사고 등록</div><div class="v up">3건 등록됨</div></div>
    </div>`
    + (isV21Ver() ? '' : untactSteps(['신고 접수','사고 등록','해지·거래재개'], 1)) +
    `<div class="sec-title" style="padding-top:0">사고 신고 등록</div>
    <div class="list">
      <div class="row" style="cursor:default">
        <div class="ic">${I.power}</div>
        <div class="tx"><div class="t">계좌출금 정지 사고등록</div><div class="d">해당 계좌 출금·이체 즉시 정지</div></div>
        <span class="mini-btn" data-flash="계좌출금 정지 사고등록이 완료되었습니다. (시연용)">등록</span>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.idcard}</div>
        <div class="tx"><div class="t">제휴카드 분실 사고등록</div><div class="d">제휴 체크·신용카드 사용 정지</div></div>
        <span class="mini-btn" data-flash="제휴카드 분실 사고등록이 완료되었습니다. (시연용)">등록</span>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.key}</div>
        <div class="tx"><div class="t">OTP 사고등록</div><div class="d">OTP 분실·도난 · 보안매체 사용 정지</div></div>
        <span class="mini-btn" data-flash="OTP 사고등록이 완료되었습니다. (시연용)">등록</span>
      </div>
    </div>
    <div class="sec-title">등록된 사고 해지</div>
    <div class="list">
      <div class="row" style="cursor:default">
        <div class="ic">${I.shield}</div>
        <div class="tx"><div class="t">분실·도난 사고신고 <span class="tag live">등록중</span></div><div class="d">2026.06.22 등록 · 전 계좌 정지</div></div>
        <span class="mini-btn warn" data-flash="사고신고가 해지되었습니다. 정상 거래가 가능합니다. (시연용)">해지</span>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.clock}</div>
        <div class="tx"><div class="t">장기미사용계좌 <span class="tag wait">거래제한</span></div><div class="d">1년 이상 미사용 · 출금·이체 제한</div></div>
        <span class="mini-btn warn" data-s1go="result" data-rk="purpose" data-fk="금융거래목적확인서">해지</span>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.idcard}</div>
        <div class="tx"><div class="t">단기간 다수계좌 <span class="tag wait">거래제한</span></div><div class="d">단기간 다수 계좌개설 · 신규거래 제한</div></div>
        <span class="mini-btn warn" data-s1go="result" data-rk="purpose" data-fk="금융거래목적확인서">해지</span>
      </div>
    </div>
    <div class="notice">분실·도난 사고는 본인 확인 후 즉시 해지됩니다. 장기미사용·단기간 다수계좌의 거래제한 해지는 금융거래목적확인서 제출이 필요합니다.</div>`;
  },

  /* 금융거래목적확인서 */
  purpose(){
    return untactSteps(['정보 입력','서류 제출','제출 완료'], 0) +
    `<div class="field"><div class="fl">거래 목적</div><div class="fi">자산운용·투자 ${I.down}</div></div>
      <div class="field"><div class="fl">자금 원천</div><div class="fi">근로·사업 소득 ${I.down}</div></div>
      <div class="field"><div class="fl">직업 구분</div><div class="fi">회사원 ${I.down}</div></div>
      <div class="primary-btn" data-flash="금융거래목적확인서가 제출되었습니다. 거래제한이 해제됩니다. (시연용)">제출하기</div>
      <div class="notice">자금세탁방지(AML) 제도에 따라 금융거래 목적 확인이 필요합니다. 제출 후 장기미사용·다수계좌 거래제한이 해제됩니다.</div>`;
  },

  /* 고객정보확인 (CDD/EDD) */
  cdd(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">실명 확인</div><div class="v">홍길동 (****-1******)</div></div>
      <div class="data-row"><div class="k">고객확인 등급</div><div class="v">CDD · 일반</div></div>
      <div class="data-row"><div class="k">최근 확인일</div><div class="v">2025.06.20</div></div>
      <div class="data-row"><div class="k">갱신 예정일</div><div class="v up">2026.06.20</div></div>
    </div>
    <div class="primary-btn" data-applink="cdd">고객확인 정보 등록 · 갱신</div>
    <div class="notice">CDD/EDD는 고객확인제도에 따른 신원·거래목적 확인 절차입니다.</div>`;
  },

  /* 서류발급 및 신청내역조회 */
  certissue(){
    return menuList([
      {k:'잔고증명서', d:'특정일 기준 보유 잔고 증명', ic:'cert', go:'certbal'},
      {k:'거래내역서', d:'기간별 거래내역서 발급', ic:'doc', go:'certtx'},
      {k:'외납세액명세서', d:'외국 납부세액 내역 명세', ic:'doc', go:'certforeign'},
      {k:'양도소득내역서', d:'양도소득 대상 매매손익 명세', ic:'chart', go:'certgains'},
    ]);
  },

  /* 증명서 ── 잔고증명서 발급 */
  certbal(){
    return untactSteps(['발급 신청','발급 처리','발급 완료'], 0) +
    `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">증명 계좌</div><div class="v">키움 종합 1234-5678</div></div>
      <div class="data-row"><div class="k">예금주</div><div class="v">홍길동</div></div>
    </div>
    ${certField('certDate')}
    ${certField('certUse')}
    ${certField('certCopies')}
    <div class="primary-btn" data-flash="잔고증명서가 발급되었습니다. 등록된 이메일로 발송됩니다. (시연용)">잔고증명서 발급</div>
    <div class="notice">기준일 현재 보유 종목 평가금액과 예수금이 증명서에 표기됩니다.</div>`;
  },

  /* 증명서 ── 거래내역서 발급 */
  certtx(){
    return untactSteps(['발급 신청','발급 처리','발급 완료'], 0) +
    `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">발급 계좌</div><div class="v">키움 종합 1234-5678</div></div>
    </div>
    ${certField('certPeriod')}
    ${certField('certTxType')}
    ${certField('certFormat')}
    <div class="primary-btn" data-flash="거래내역서가 발급되었습니다. (시연용)">거래내역서 발급</div>
    <div class="notice">최근 5년 이내의 매매·입출금 거래내역서를 발급할 수 있습니다.</div>`;
  },

  /* 서류 ── 외납세액명세서 발급 */
  certforeign(){
    return untactSteps(['발급 신청','발급 처리','발급 완료'], 0) +
    `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">발급 계좌</div><div class="v">키움 종합 1234-5678</div></div>
      <div class="data-row"><div class="k">예금주</div><div class="v">홍길동</div></div>
    </div>
    ${certField('certTaxYear')}
    ${certField('certUse')}
    ${certField('certFormat')}
    <div class="primary-btn" data-flash="외납세액명세서가 발급되었습니다. (시연용)">외납세액명세서 발급</div>
    <div class="notice">해외 주식·채권 등에서 외국에 납부한 세액 내역을 명세서로 발급합니다. 연말정산·종합소득세 신고에 활용할 수 있습니다.</div>`;
  },

  /* 서류 ── 양도소득내역서 발급 */
  certgains(){
    return untactSteps(['발급 신청','발급 처리','발급 완료'], 0) +
    `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">발급 계좌</div><div class="v">키움 종합 1234-5678</div></div>
      <div class="data-row"><div class="k">예금주</div><div class="v">홍길동</div></div>
    </div>
    ${certField('certTaxYear')}
    ${certField('certUse')}
    ${certField('certFormat')}
    <div class="primary-btn" data-flash="양도소득내역서가 발급되었습니다. (시연용)">양도소득내역서 발급</div>
    <div class="notice">해외주식 등 양도소득 대상 자산의 매매 손익 내역을 명세서로 발급합니다. 양도소득세 신고에 활용할 수 있습니다.</div>`;
  },

  /* 신용·대출 만기연장 신청 */
  creditext(){
    return (isV21Ver() ? '' : untactSteps(['연장 신청','연장 심사','연장 완료'], 0)) +
    `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">대출 계좌</div><div class="v">키움 종합 1234-5678</div></div>
      <div class="data-row"><div class="k">신용·대출 잔액</div><div class="v">15,400,000원</div></div>
      <div class="data-row"><div class="k">담보비율</div><div class="v up">182%</div></div>
    </div>
    <div class="sec-title" style="padding-top:0">연장 가능 2건</div>
    <div class="list">
      <div class="row" style="cursor:default">
        <div class="ic">${I.clock}</div>
        <div class="tx"><div class="t">신용융자 만기연장</div><div class="d">잔액 12,400,000원 · 만기 2026.07.10 (D-14)</div></div>
        <span class="mini-btn" data-flash="신용융자 만기연장이 신청되었습니다. (시연용)">연장신청</span>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.bond}</div>
        <div class="tx"><div class="t">매도대금 담보대출 만기연장</div><div class="d">잔액 3,000,000원 · 만기 2026.07.05 (D-9)</div></div>
        <span class="mini-btn" data-flash="담보대출 만기연장이 신청되었습니다. (시연용)">연장신청</span>
      </div>
    </div>
    <div class="notice">만기연장은 약정 한도·담보비율 충족 시 신청 당일 처리됩니다.</div>`;
  },

  /* 공모주 청약 */
  ipo(){
    return `<div class="sec-title" style="padding-top:0">진행 중 공모주</div>
    <div class="list">
      <div class="row" style="cursor:default">
        <div class="ic">${I.ipo}</div>
        <div class="tx"><div class="t">에이펙스반도체 <span class="tag live">청약중</span></div><div class="d">6/24~6/25 · 확정공모가 36,000원</div></div>
        <span class="mini-btn" data-flash="공모주 청약 화면으로 이동합니다. (시연용)">청약</span>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.ipo}</div>
        <div class="tx"><div class="t">대명에너지 <span class="tag wait">예정</span></div><div class="d">7/01~7/02 · 희망밴드 18,000~21,000원</div></div>
        <span class="mini-btn" data-flash="공모주 청약 알림이 신청되었습니다.">알림신청</span>
      </div>
    </div>
    <div class="sec-title">청약 조회</div>` + menuList([
      {k:'청약 경쟁률 조회', d:'종목별 청약 경쟁률 확인', ic:'chart', go:'iporate'},
      {k:'환불·배정 조회', d:'배정 주수 및 환불금 확인', ic:'wallet', go:'iporesult'},
      {k:'청약 내역 조회', d:'나의 공모주 청약 신청 내역', ic:'doc', go:'ipohist'},
    ]);
  },

  /* 공모주 ── 청약 경쟁률 조회 */
  iporate(){
    const r=[
      {n:'에이펙스반도체', rate:'1,420 : 1', st:'live', lb:'청약중', d:'06.24~06.25 청약중'},
      {n:'그린에너지솔루션', rate:'예정', st:'wait', lb:'예정', d:'06.26~06.27 예정'},
      {n:'대명에너지', rate:'875 : 1', st:'done', lb:'마감', d:'06.18 청약마감'},
    ];
    return `<div class="list">` + r.map(x=>`
      <div class="row" style="cursor:default">
        <div class="ic">${I.chart}</div>
        <div class="tx"><div class="t">${x.n} <span class="tag ${x.st}">${x.lb}</span></div><div class="d">${x.d}</div></div>
        <div class="rt2"><div class="p">${x.rate}</div></div>
      </div>`).join('') + `</div>
      <div class="notice">기관 수요예측 경쟁률이며, 일반 청약 경쟁률은 청약 마감 후 확정됩니다.</div>`;
  },

  /* 공모주 ── 청약 내역 조회 */
  ipohist(){
    return `<div class="list">
      <div class="row" style="cursor:default">
        <div class="ic">${I.ipo}</div>
        <div class="tx"><div class="t">미래모빌리티 <span class="tag done">배정완료</span></div><div class="d">청약 100주 · 배정 7주 · 환불 2,790,000원</div></div>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.ipo}</div>
        <div class="tx"><div class="t">에이펙스반도체 <span class="tag live">청약중</span></div><div class="d">청약 50주 · 증거금 900,000원 · 06.25 마감</div></div>
        <span class="mini-btn warn" data-flash="공모주 청약을 취소했습니다. (시연용)">취소</span>
      </div>
    </div>
    <div class="notice">최근 1년간의 공모주 청약 신청 내역을 조회할 수 있습니다.</div>`;
  },

  /* 간편/공동인증 등록·해지 */
  authmgmt(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">간편비밀번호(PIN)</div><div class="v up">등록됨</div></div>
      <div class="data-row"><div class="k">생체인증</div><div class="v">미등록</div></div>
      <div class="data-row"><div class="k">공동인증서</div><div class="v">2026.09.12 만료</div></div>
    </div>` + menuList([
      {k:'간편비밀번호(PIN) 변경', d:'6자리 간편비밀번호 재설정', ic:'shield', go:'idpwpin'},
      {k:'생체인증 등록', d:'지문·Face ID 등록', ic:'key', go:'authbio'},
      {k:'공동인증서 갱신/재발급', d:'인증서 갱신·타기관 등록', ic:'cert', go:'authcert'},
      {k:'간편/공동인증 해지', d:'등록된 인증수단 해지', ic:'x', go:'authrevoke'},
    ]);
  },

  /* ===== 9. 권리업무 (셀프서비스 메뉴구조도 9번 · 대 > 중 > 소) ===== */
  /* 권리업무 (대분류) → 중분류 4종 */
  rights(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">계좌</div><div class="v">키움 종합 1234-5678</div></div>
      <div class="data-row"><div class="k">진행중 권리</div><div class="v up">2건</div></div>
    </div>` + menuList([
      {k:'유상청약',       d:'유상증자 청약 신청·예약·취소·내역', ic:'ipo',    go:'rightsOffer'},
      {k:'주주반대의사',   d:'주총 안건 반대의사 통지 신청·취소·내역', ic:'doc',   go:'rightsDissent'},
      {k:'주식매수청구',   d:'주식매수청구권 행사 신청·취소·내역', ic:'wallet', go:'rightsAppraisal'},
      {k:'권리현황',       d:'보유 종목 권리배정·일정 조회', ic:'search', go:'rightsStatus'},
    ]);
  },
  /* 권리업무 ── 1) 유상청약 (중분류) → 소분류 4종 */
  rightsOffer(){
    return `<div class="sec-title" style="padding-top:0">유상청약</div>`
    + menuList([
      {k:'유상청약 신청',     d:'당일 유상증자 청약 신청'},
      {k:'유상청약예약 신청', d:'예약 청약 신청 (청약기간 내 자동접수)'},
      {k:'유상청약 취소',     d:'당일·예약 청약 취소'},
      {k:'유상청약신청내역',  d:'청약 신청·배정·환불 내역 조회'},
    ], '‘유상청약’ 세부 업무는 시연 준비 중입니다. (시연용)');
  },
  /* 권리업무 ── 2) 주주반대의사 (중분류) → 소분류 3종 */
  rightsDissent(){
    return `<div class="sec-title" style="padding-top:0">주주반대의사</div>`
    + menuList([
      {k:'주주반대의사 신청',    d:'주주총회 안건 반대의사 통지'},
      {k:'주주반대의사 신청취소', d:'통지한 반대의사 철회'},
      {k:'주주반대의사신청내역',  d:'반대의사 통지 내역 조회'},
    ], '‘주주반대의사’ 세부 업무는 시연 준비 중입니다. (시연용)');
  },
  /* 권리업무 ── 3) 주식매수청구 (중분류) → 소분류 3종 */
  rightsAppraisal(){
    return `<div class="sec-title" style="padding-top:0">주식매수청구</div>`
    + menuList([
      {k:'주식매수청구 신청',    d:'주식매수청구권 행사 신청'},
      {k:'주식매수청구 신청취소', d:'행사 신청 취소'},
      {k:'주식매수청구신청내역',  d:'매수청구 신청·정산 내역 조회'},
    ], '‘주식매수청구’ 세부 업무는 시연 준비 중입니다. (시연용)');
  },
  /* 권리업무 ── 4) 권리현황 (중분류 · 소분류 없음, 조회 화면) */
  rightsStatus(){
    return `<div class="sec-title" style="padding-top:0">보유 종목 권리현황</div>
    <div class="list">
      <div class="row" style="cursor:default">
        <div class="ic">${I.ipo}</div>
        <div class="tx"><div class="t">삼성전자 <span class="tag live">유상증자</span></div><div class="d">신주배정기준일 2026.07.10 · 청약 07.21~07.22</div></div>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.doc}</div>
        <div class="tx"><div class="t">SK하이닉스 <span class="tag wait">주총</span></div><div class="d">정기주총 2026.07.15 · 반대의사 접수 ~07.14</div></div>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.wallet}</div>
        <div class="tx"><div class="t">현대차 <span class="tag">배당</span></div><div class="d">배당기준일 2026.06.30 · 주당 1,500원</div></div>
      </div>
    </div>
    <div class="notice">권리배정·청약 일정은 발행회사·명의개서대리인 사정에 따라 변경될 수 있습니다.</div>`;
  },

  /* 인증관리 ── 생체인증 등록 */
  authbio(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">기기</div><div class="v">iPhone 15 Pro</div></div>
      <div class="data-row"><div class="k">생체인증 상태</div><div class="v">미등록</div></div>
    </div>
    <div class="toggle-row">
      <div><div class="tl">지문(Touch ID) 로그인</div><div class="td">지문으로 간편 로그인·인증</div></div>
      <div class="sw" data-sw></div>
    </div>
    <div class="toggle-row">
      <div><div class="tl">얼굴(Face ID) 로그인</div><div class="td">얼굴 인식으로 간편 로그인·인증</div></div>
      <div class="sw on" data-sw></div>
    </div>
    <div class="primary-btn" data-flash="생체인증이 등록되었습니다. 다음 로그인부터 사용할 수 있습니다. (시연용)">생체인증 등록</div>
    <div class="notice">생체정보는 고객님 기기의 보안영역에만 저장되며 서버로 전송되지 않습니다.</div>`;
  },

  /* 인증관리 ── 공동인증서 갱신/재발급 */
  authcert(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">인증서 종류</div><div class="v">공동인증서(범용)</div></div>
      <div class="data-row"><div class="k">발급기관</div><div class="v">yessign</div></div>
      <div class="data-row"><div class="k">만료일</div><div class="v up">2026.09.12 (D-75)</div></div>
    </div>
    <div class="list">
      <div class="row" style="cursor:default">
        <div class="ic">${I.cert}</div>
        <div class="tx"><div class="t">인증서 갱신</div><div class="d">만료 전 동일 인증서를 1년 연장</div></div>
        <span class="mini-btn" data-flash="공동인증서 갱신이 완료되었습니다. (시연용)">갱신</span>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.shield}</div>
        <div class="tx"><div class="t">인증서 재발급</div><div class="d">분실·훼손 시 신규 발급</div></div>
        <span class="mini-btn" data-flash="공동인증서 재발급 절차를 시작합니다. (시연용)">재발급</span>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.transfer}</div>
        <div class="tx"><div class="t">타기관 인증서 등록</div><div class="d">은행·타사 인증서 가져오기</div></div>
        <span class="mini-btn" data-flash="타기관 인증서 등록 화면으로 이동합니다. (시연용)">등록</span>
      </div>
    </div>
    <div class="notice">인증서 갱신은 만료 30일 전부터 신청할 수 있습니다.</div>`;
  },

  /* 인증관리 ── 간편/공동인증 해지 */
  authrevoke(){
    return `<div class="sec-title" style="padding-top:0">등록된 인증수단</div>
    <div class="list">
      <div class="row" style="cursor:default">
        <div class="ic">${I.shield}</div>
        <div class="tx"><div class="t">간편비밀번호(PIN)</div><div class="d">6자리 PIN · 2024.01.10 등록</div></div>
        <span class="mini-btn warn" data-flash="간편비밀번호가 해지되었습니다. (시연용)">해지</span>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.key}</div>
        <div class="tx"><div class="t">생체인증(Face ID)</div><div class="d">2025.03.22 등록</div></div>
        <span class="mini-btn warn" data-flash="생체인증이 해지되었습니다. (시연용)">해지</span>
      </div>
      <div class="row" style="cursor:default">
        <div class="ic">${I.cert}</div>
        <div class="tx"><div class="t">공동인증서(범용)</div><div class="d">2026.09.12 만료</div></div>
        <span class="mini-btn warn" data-flash="공동인증서가 해지되었습니다. (시연용)">해지</span>
      </div>
    </div>
    <div class="notice">모든 인증수단을 해지하면 다음 로그인 시 본인인증을 다시 진행해야 합니다.</div>`;
  },

  /* 잔고 ── 보유 잔고 */
  holdings(){
    const stk = [
      {n:'삼성전자', q:10, avg:78000, cur:83200},
      {n:'SK하이닉스', q:3, avg:198000, cur:212500},
      {n:'현대차', q:5, avg:241000, cur:228000},
      {n:'카카오', q:20, avg:54200, cur:49800},
    ];
    let totEval=0, totCost=0;
    let rows = stk.map(s=>{
      const ev=s.q*s.cur, pl=(s.cur-s.avg)*s.q, rt=((s.cur-s.avg)/s.avg*100);
      totEval+=ev; totCost+=s.q*s.avg;
      const up=pl>=0, cls=up?'txt-up':'txt-down', sign=up?'+':'';
      return `<div class="stk">
        <div><div class="nm">${s.n}</div><div class="sub2">${s.q}주 · 평단 ${won(s.avg)}</div></div>
        <div class="rt"><div class="p">${won(ev)}</div>
          <div class="pc ${cls}">${sign}${won(pl)} (${sign}${rt.toFixed(1)}%)</div></div>
      </div>`;
    }).join('');
    const totPl=totEval-totCost, totRt=totPl/totCost*100;
    const up=totPl>=0, cls=up?'up':'down', sign=up?'+':'';
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">총 평가금액</div><div class="v">${won(totEval)}원</div></div>
      <div class="data-row"><div class="k">총 평가손익</div><div class="v ${cls}">${sign}${won(totPl)} (${sign}${totRt.toFixed(1)}%)</div></div>
      <div class="data-row"><div class="k">출금가능 예수금</div><div class="v">2,150,000원</div></div>
    </div>
    <div class="sec-title" style="padding-top:0">보유 종목 ${stk.length}</div>
    <div class="data-card">${rows}</div>`;
  },

  /* 잔고 ── 미체결 */
  unfilled(){
    const o=[
      {n:'삼성전자', s:'매수', q:10, p:83000, st:'미체결'},
      {n:'카카오',   s:'매도', q:20, p:50500, st:'부분체결'},
    ];
    return `<div class="list">` + o.map(x=>`
      <div class="row" style="cursor:default">
        <div class="tx"><div class="t">${x.n} <span class="tag ${x.s==='매수'?'live':'done'}">${x.s}</span></div>
          <div class="d">${x.q}주 · ${won(x.p)}원 · ${x.st}</div></div>
        <div style="display:flex;gap:7px">
          <span class="mini-btn" data-flash="정정 화면으로 이동합니다.">정정</span>
          <span class="mini-btn warn" data-flash="주문을 취소했습니다.">취소</span>
        </div>
      </div>`).join('') + `</div>
      <div class="notice">미체결 주문은 장중에만 정정·취소할 수 있습니다.</div>`;
  },

  /* 잔고 ── 체결 내역 */
  filled(){
    const all=[
      {n:'삼성전자', s:'매수', q:10, p:78000, t:'09:12'},
      {n:'SK하이닉스', s:'매수', q:3, p:198000, t:'10:34'},
      {n:'현대차', s:'매도', q:2, p:235000, t:'13:05'},
    ];
    let body;
    if(orderTab==='전체'){
      const o = txFilter.stock ? all.filter(x=>x.n===txFilter.stock) : all;
      body = o.length
        ? `<div class="list">` + o.map(x=>`
            <div class="row" style="cursor:default">
              <div class="tx"><div class="t">${x.n} <span class="tag ${x.s==='매수'?'live':'done'}">${x.s}</span></div>
                <div class="d">${x.q}주 · ${won(x.p)}원 · ${x.t} 체결</div></div>
              <div class="rt2"><div class="p">${won(x.q*x.p)}원</div></div>
            </div>`).join('') + `</div>`
        : orderEmpty();
    } else if(orderTab==='예약'){
      body = `<div class="list">
        <div class="row" style="cursor:default">
          <div class="tx"><div class="t">삼성전자 <span class="tag wait">예약</span></div>
            <div class="d">매수 5주 · 82,000원 · 내일 09:00 발주</div></div>
          <span class="mini-btn warn" data-flash="예약주문을 취소했습니다.">취소</span>
        </div></div>`;
    } else {   // 미체결: 정정·취소 가능한 주문 (취소 버튼 포함)
      const un=[
        {n:'삼성전자', s:'매수', q:5, p:82000, t:'09:30'},
        {n:'카카오', s:'매도', q:10, p:51000, t:'10:15'},
        {n:'NAVER', s:'매수', q:2, p:198500, t:'11:02'},
      ];
      const u = txFilter.stock ? un.filter(x=>x.n===txFilter.stock) : un;
      body = u.length
        ? `<div class="list">` + u.map(x=>`
            <div class="row" style="cursor:default">
              <div class="tx"><div class="t">${x.n} <span class="tag ${x.s==='매수'?'live':'done'}">${x.s}</span></div>
                <div class="d">${x.q}주 · ${won(x.p)}원 · ${x.t} 주문 · 미체결</div></div>
              <span class="mini-btn warn" data-flash="미체결 주문을 취소했습니다. (시연용)">취소</span>
            </div>`).join('') + `</div>`
        : orderEmpty();
    }
    return orderFilterBar() + body;
  },

  /* 잔고 ── 예약주문 */
  reserved(){
    return `<div class="list">
      <div class="row" style="cursor:default">
        <div class="tx"><div class="t">삼성전자 <span class="tag wait">예약</span></div>
          <div class="d">매수 5주 · 82,000원 · 내일 09:00 발주</div></div>
        <span class="mini-btn warn" data-flash="예약주문을 취소했습니다.">취소</span>
      </div></div>
      <div class="notice">예약주문은 다음 영업일 장 시작 시 자동 발주됩니다.</div>`;
  },

  /* 잔고 ── 거래내역 */
  trades(){
    const all=[
      {d:'06.20', n:'삼성전자', s:'매수', a:780000},
      {d:'06.18', n:'카카오', s:'매도', a:1010000},
      {d:'06.16', n:'SK하이닉스', s:'매수', a:594000},
    ];
    const o = txFilter.stock ? all.filter(x=>x.n===txFilter.stock) : all;
    const body = o.length
      ? `<div class="data-card">` + o.map(x=>`
          <div class="data-row"><div class="k">${x.d} · ${x.n} ${x.s}</div>
            <div class="v ${x.s==='매수'?'up':'down'}">${x.s==='매수'?'-':'+'}${won(x.a)}</div></div>`).join('') + `</div>`
      : `<div class="tx-empty"><div class="te-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h11l3 3v13H5z"/><path d="M9 16v-3M12 16v-6M15 16v-2"/></svg></div><div class="te-t">거래내역이 없어요.</div></div>`;
    return txFilterBar() + body;
  },

  /* 잔고 ── 입출금 */
  cashflow(){
    const o=[
      {d:'06.21', k:'타행 입금', a:3000000, plus:true},
      {d:'06.20', k:'주식 매수 대금', a:780000, plus:false},
      {d:'06.15', k:'배당금 입금', a:42500, plus:true},
    ];
    return `<div class="data-card">` + o.map(x=>`
      <div class="data-row"><div class="k">${x.d} · ${x.k}</div>
        <div class="v ${x.plus?'down':'up'}">${x.plus?'+':'-'}${won(x.a)}</div></div>`).join('')
      + `</div>`;
  },

  /* 잔고 ── 실현손익 */
  pnl(){
    return `<div class="data-card" style="margin-bottom:14px">
      <div class="data-row"><div class="k">이번 달 실현손익</div><div class="v up">+312,400</div></div>
      <div class="data-row"><div class="k">실현 수익률</div><div class="v up">+5.8%</div></div>
      <div class="data-row"><div class="k">매매 수수료·세금</div><div class="v">-8,210</div></div>
    </div>
    <div class="data-card">
      <div class="data-row"><div class="k">카카오 (매도)</div><div class="v up">+158,000</div></div>
      <div class="data-row"><div class="k">현대차 (매도)</div><div class="v down">-12,000</div></div>
      <div class="data-row"><div class="k">NAVER (매도)</div><div class="v up">+166,400</div></div>
    </div>`;
  },

  /* 이체 ── 계좌이체 */
  transfer(){
    return `<div class="field"><div class="fl">출금 계좌</div>
        <div class="fi">키움증권 종합 1234-5678 <span class="unit">2,150,000원</span></div></div>
      <div class="field"><div class="fl">입금 계좌</div>
        <div class="fi">신한은행 110-***-****56 ${I.down}</div></div>
      <div class="field"><div class="fl">이체 금액</div>
        <div class="fi amt">1,000,000<span class="unit">원</span></div></div>
      <div class="primary-btn" data-flash="이체가 완료되었습니다. (시연용)">이체하기</div>
      <div class="notice">간편모드에서는 1일 1,000만원까지 즉시 이체할 수 있습니다.</div>`;
  },

  /* 이체 ── 출금가능금액 */
  withdrawable(){
    return `<div class="data-card">
      <div class="data-row"><div class="k">예수금</div><div class="v">2,150,000원</div></div>
      <div class="data-row"><div class="k">미수·담보 차감</div><div class="v">0원</div></div>
      <div class="data-row"><div class="k">출금가능금액</div><div class="v up">2,150,000원</div></div>
    </div>
    <div class="primary-btn" data-flash="출금 화면으로 이동합니다.">출금하기</div>`;
  },

  /* 이체 ── 자동이체 */
  autotransfer(){
    return `<div class="list">
      <div class="row" style="cursor:default">
        <div class="ic">${I.clock}</div>
        <div class="tx"><div class="t">매월 25일 · 연금저축</div><div class="d">신한은행 → 키움 · 300,000원</div></div>
        <span class="tag done">정상</span>
      </div></div>
      <div class="primary-btn" data-flash="자동이체 등록 화면으로 이동합니다.">+ 자동이체 등록</div>`;
  },

  /* 공모주 ── 진행중 */
  ipolist(){
    const ipo=[
      {n:'에이펙스반도체', band:'52,000~60,000', date:'06.24~06.25', rate:'1,420 : 1', st:'live'},
      {n:'그린에너지솔루션', band:'18,000~22,000', date:'06.26~06.27', rate:'예정', st:'wait'},
    ];
    return ipo.map(x=>`<div class="ipo-card">
      <div class="ih"><div class="ic" style="width:34px;height:34px;border-radius:10px;background:var(--primary-soft);display:grid;place-items:center;color:var(--primary)">${I.ipo}</div>
        <div class="nm">${x.n}</div>
        <span class="tag ${x.st}" style="margin-left:auto">${x.st==='live'?'청약중':'청약예정'}</span></div>
      <div class="irow"><div class="k">공모가 밴드</div><div class="v">${x.band}원</div></div>
      <div class="irow"><div class="k">청약 기간</div><div class="v">${x.date}</div></div>
      <div class="irow"><div class="k">기관 경쟁률</div><div class="v">${x.rate}</div></div>
      ${x.st==='live'?`<div class="primary-btn" style="margin:12px 0 0" data-flash="청약 신청 화면으로 이동합니다.">청약하기</div>`:''}
    </div>`).join('');
  },

  /* 공모주 ── 청약 결과 */
  iporesult(){
    return `<div class="ipo-card">
      <div class="ih"><div class="nm">미래모빌리티</div><span class="tag done" style="margin-left:auto">배정완료</span></div>
      <div class="irow"><div class="k">청약 수량</div><div class="v">100주</div></div>
      <div class="irow"><div class="k">배정 수량</div><div class="v">7주</div></div>
      <div class="irow"><div class="k">환불 금액</div><div class="v">2,790,000원</div></div>
      <div class="irow"><div class="k">환불 예정일</div><div class="v">06.24</div></div>
    </div>`;
  },

  /* 사고신고 ── 분실/사고 */
  report(){
    return menuList([
      {k:'계좌 사고 신고', d:'부정 거래·도용 의심 시 즉시 정지', ic:'shield'},
      {k:'OTP·보안카드 분실', d:'재발급 및 일시 정지 신청', ic:'shield'},
      {k:'명의도용 차단', d:'비대면 계좌개설 차단 신청', ic:'shield'},
    ], '신고 접수 화면으로 이동합니다.');
  },

  /* 사고신고 ── 인증센터 */
  cert(){
    return menuList([
      {k:'공동인증서 관리', d:'발급·갱신·복사·삭제', ic:'shield'},
      {k:'금융인증서 관리', d:'클라우드 인증서', ic:'shield'},
      {k:'간편비밀번호 변경', d:'6자리 PIN 재설정', ic:'shield'},
    ], '인증 화면으로 이동합니다.');
  },

  /* 사고신고 ── 알림설정 */
  noti(){
    const t=[
      {k:'체결 알림', d:'주문 체결 시 푸시 발송', on:true},
      {k:'입출금 알림', d:'예수금 변동 시 푸시 발송', on:true},
      {k:'관심종목 시세 알림', d:'목표가 도달 시 알림', on:false},
      {k:'공모주 일정 알림', d:'청약 시작 전 안내', on:true},
    ];
    return t.map(x=>`<div class="toggle-row">
      <div><div class="tl">${x.k}</div><div class="td">${x.d}</div></div>
      <div class="sw ${x.on?'on':''}" data-sw></div>
    </div>`).join('');
  },
};

// 비대면업무 진행 단계 스텝바 (cur=진행중 단계 index, cur>=length면 전체 완료, rejected=cur단계 반려)
function untactSteps(steps, cur, rejected){
  return `<div class="usteps">` + steps.map((s,i)=>{
    const cls = i<cur ? 'done' : (i===cur ? (rejected?'reject':'cur') : '');
    const mark = i<cur ? I.check : (i===cur && rejected ? '!' : (i+1));
    return `<div class="ustep ${cls}"><span class="udot">${mark}</span><span class="ulabel">${s}</span></div>`;
  }).join('') + `</div>`;
}

function menuList(items, msg){
  // x.go 가 있으면 해당 결과화면으로 이동, 없으면 안내 메시지(flash)
  return `<div class="list">` + items.map(x=>{
    const act = x.go ? `data-s1go="result" data-rk="${x.go}" data-fk="${x.k}"` : `data-flash="${msg}"`;
    return `
    <div class="row" ${act}>
      <div class="ic">${I[x.ic]}</div>
      <div class="tx"><div class="t">${x.k}</div><div class="d">${x.d}</div></div>
      <div class="chev">${I.chev}</div></div>`;
  }).join('') + `</div>`;
}

/* ===== 거래내역 상단 필터: 계좌번호 / 종목검색 / 기간선택 / 거래유형 ===== */
const txFilter = {stock:'', period:'2026.06.24 ~ 2026.06.24'};
const pad2 = n => String(n).padStart(2,'0');
const fmtP = d => `${d.y}.${pad2(d.m)}.${pad2(d.d)}`;

function txFilterBar(){
  const stockCell = txFilter.stock
    ? `<span class="stk-nm">${txFilter.stock}</span><span class="stk-x" data-stockclear title="종목 지우기">${I.x}</span>`
    : `종목검색 ${I.search}`;
  return `<div class="tx-filter">
    <div class="txf-row">
      <div class="txf" data-acctchange>${authAcct.type} ${authAcct.no} ${I.down}</div>
      <div class="txf sub stk" data-stocksearch>${stockCell}</div>
    </div>
    <div class="txf-row">
      <div class="txf sub" data-periodsel>${txFilter.period} ${I.down}</div>
      <div class="txf sub" data-flash="거래 유형을 선택합니다. (시연용)">전체 거래 ${I.down}</div>
    </div>
  </div>`;
}

/* 체결내역 상단 필터 (영웅문 주문내역상단 참고): 계좌·종목검색·날짜·체결/미체결/예약 */
const ORDER_TABS = ['전체','미체결','예약'];
let orderTab = '전체';
const TODAY = '2026.06.24';
function orderEmpty(){
  return `<div class="tx-empty"><div class="te-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h11l3 3v13H5z"/><path d="M9 16v-3M12 16v-6M15 16v-2"/></svg></div><div class="te-t">주문내역이 없어요.</div></div>`;
}
function orderFilterBar(){
  const isAll = orderTab==='전체';
  // 전체: 과거 날짜 조회 가능 / 미체결·예약: 당일 자동셋팅 + 비활성화
  const dateCell = isAll
    ? `<div class="txf sub" data-datesel>${fmtP(orderDate)} ${I.down}</div>`
    : `<div class="txf sub off">${TODAY} ${I.down}</div>`;
  const stockCell = txFilter.stock
    ? `<span class="stk-nm">${txFilter.stock}</span><span class="stk-x" data-stockclear title="종목 지우기">${I.x}</span>`
    : `종목검색 ${I.search}`;
  return `<div class="tx-filter">
    <div class="txf-row">
      <div class="txf" data-acctchange>${authAcct.type} ${authAcct.no} ${I.down}</div>
      <div class="txf sub stk" data-stocksearch>${stockCell}</div>
    </div>
    <div class="txf-row">
      ${dateCell}
      <div class="txf sub" data-flash="주문 유형을 선택합니다. (시연용)">전체 주문 ${I.down}</div>
    </div>
    <div class="ord-tabs">` + ORDER_TABS.map(tb=>
      `<div class="ord-tab ${tb===orderTab?'on':''}" data-ordertab="${tb}">${tb}</div>`).join('') + `</div>
  </div>`;
}

/* 종목검색창 (영웅문 종목검색창 참고) */
const STOCKS = [
  {nm:'삼성전자', t:'주식', bg:'#1428A0'}, {nm:'SK하이닉스', t:'주식', bg:'#E60012'},
  {nm:'카카오', t:'주식', bg:'#FEE500', fg:'#3A2A00'}, {nm:'현대차', t:'주식', bg:'#002C5F'},
  {nm:'네이버', t:'주식', bg:'#03C75A'}, {nm:'파이온엑스', t:'주식', bg:'#6A1B9A'},
  {nm:'LK삼양', t:'주식', bg:'#7CB342'}, {nm:'SP삼화', t:'주식', bg:'#D32F2F'},
  {nm:'삼기', t:'주식', bg:'#E53935'}, {nm:'삼기에너지솔루션즈', t:'주식', bg:'#212121'},
  {nm:'삼륭물산', t:'주식', bg:'#2E7D32'}, {nm:'삼립', t:'주식 · 소수점', bg:'#29B6F6'},
  {nm:'삼목에스폼', t:'주식 · 소수점', bg:'#BDBDBD', fg:'#333'}, {nm:'삼미금속', t:'주식', bg:'#1976D2'},
];
const RECENT_STOCKS = ['삼성전자','SK하이닉스','파이온엑스'];
function stockResultHTML(q){
  const k=(q||'').trim();
  const list = STOCKS.filter(s=>!k || s.nm.includes(k));
  if(!list.length) return `<div class="ss-empty">검색 결과가 없어요.</div>`;
  return list.map(s=>`<div class="ss-row" data-stockpick="${s.nm}">
    <div class="ss-lg" style="background:${s.bg};color:${s.fg||'#fff'}">${s.nm.slice(0,2)}</div>
    <div class="ss-in"><div class="ss-nm">${s.nm}</div><div class="ss-ty">${s.t}</div></div>
  </div>`).join('');
}
function filterStockList(q){ const c=document.getElementById('stockResults'); if(c) c.innerHTML=stockResultHTML(q); }
function openStockSearch(){
  closeTxOverlay();
  const screen=document.getElementById('screen'); if(!screen) return;
  // 종목박스(주문화면) 또는 거래내역 필터 아래부터 시트가 나오도록 top 계산
  const anchor = screen.querySelector('.ord-stock') || screen.querySelector('.tx-filter') || screen.querySelector('.stk-find');
  let top = 96;
  if(anchor){ const r=anchor.getBoundingClientRect(), sr=screen.getBoundingClientRect(); top = Math.round(r.bottom - sr.top + 8); }
  const el=document.createElement('div'); el.className='tx-ov ss-float'; el.id='txOverlay';
  el.innerHTML=`<div class="ss-sheet" style="top:${top}px">
    <div class="ss-head">
      <input id="ssInput" class="ss-input" placeholder="종목명 검색" oninput="filterStockList(this.value)" autocomplete="off">
      <div class="ss-ic">${I.search}</div>
      <div class="ss-back" data-txclose>${I.x}</div>
    </div>
    <div class="ss-recent">
      <div class="ss-rt">최근 본 종목</div>
      <div class="ss-chips">${RECENT_STOCKS.map(n=>`<div class="ss-chip" data-stockpick="${n}">${n}</div>`).join('')}</div>
    </div>
    <div class="ss-results" id="stockResults">${stockResultHTML('')}</div>
  </div>`;
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}

/* 기간선택창 (영웅문 기간선택창 참고) */
const PERIOD_PRESETS = {
  today: {label:'오늘',   s:{y:2026,m:6,d:24}, e:{y:2026,m:6,d:24}},
  month: {label:'이번 달', s:{y:2026,m:6,d:1},  e:{y:2026,m:6,d:24}},
  week1: {label:'1주일',  s:{y:2026,m:6,d:17}, e:{y:2026,m:6,d:24}},
  month1:{label:'1개월',  s:{y:2026,m:5,d:24}, e:{y:2026,m:6,d:24}},
  year1: {label:'1년',    s:{y:2025,m:6,d:24}, e:{y:2026,m:6,d:24}},
};
let txPeriodSel = 'today';
function wheelCol(val, unit){
  let rows='';
  for(let i=-2;i<=2;i++) rows+=`<div class="wv ${i===0?'on':''}">${val+i}${unit}</div>`;
  return `<div class="wcol">${rows}</div>`;
}
function periodSheetHTML(){
  const p = PERIOD_PRESETS[txPeriodSel];
  const chips = Object.keys(PERIOD_PRESETS).map(k=>
    `<div class="pchip ${k===txPeriodSel?'on':''}" data-period="${k}">${PERIOD_PRESETS[k].label}</div>`).join('');
  const block = (lab,d)=>`<div class="pwlab">${lab}</div>
    <div class="pwheel">${wheelCol(d.y,'년')}${wheelCol(d.m,'월')}${wheelCol(d.d,'일')}</div>`;
  return `<div class="ps-sheet">
    <div class="ps-top"><div class="ps-title">기간을 선택하세요</div><div class="ps-x" data-txclose>✕</div></div>
    <div class="pchips">${chips}</div>
    ${block('시작일', p.s)}
    ${block('종료일', p.e)}
    <div class="primary-btn" data-periodapply>선택</div>
  </div>`;
}
function openPeriodSheet(){
  closeTxOverlay();
  const screen=document.getElementById('screen'); if(!screen) return;
  const el=document.createElement('div'); el.className='tx-ov'; el.id='txOverlay';
  el.innerHTML=periodSheetHTML();
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}
function closeTxOverlay(){ const el=document.getElementById('txOverlay'); if(el){ el.classList.remove('on'); setTimeout(()=>{ if(el.parentNode) el.remove(); },200); } }

/* 체결내역 날짜선택창 (단일 날짜: 오늘/어제/1주일전/1개월전) */
const DATE_PRESETS = {
  today: {label:'오늘',    d:{y:2026,m:6,d:24}},
  yest:  {label:'어제',    d:{y:2026,m:6,d:23}},
  week1: {label:'1주일전', d:{y:2026,m:6,d:17}},
  month1:{label:'1개월전', d:{y:2026,m:5,d:24}},
};
let orderDateSel = 'today';
let orderDate = {y:2026,m:6,d:24};
function dateSheetHTML(){
  const chips = Object.keys(DATE_PRESETS).map(k=>
    `<div class="pchip ${k===orderDateSel?'on':''}" data-datepreset="${k}">${DATE_PRESETS[k].label}</div>`).join('');
  const d = orderDate;
  return `<div class="ps-sheet">
    <div class="ps-top"><div class="ps-title">날짜를 선택하세요</div><div class="ps-x" data-txclose>✕</div></div>
    <div class="pchips">${chips}</div>
    <div class="pwheel">${wheelCol(d.y,'년')}${wheelCol(d.m,'월')}${wheelCol(d.d,'일')}</div>
    <div class="primary-btn" data-dateapply>선택</div>
  </div>`;
}
function openDateSheet(){
  closeTxOverlay();
  const screen=document.getElementById('screen'); if(!screen) return;
  const el=document.createElement('div'); el.className='tx-ov'; el.id='txOverlay';
  el.innerHTML=dateSheetHTML();
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}

/* 주문유형 선택창 (영웅문 유형선택 참고) */
function orderTypeSheetHTML(){
  const sideCls = orderState.side==='sell' ? 'sell' : 'buy';
  return `<div class="ps-sheet ot-sheet ${sideCls}">
    <div class="ps-top"><div class="ps-title">주문유형을 선택해주세요</div><div class="ps-x" data-txclose>✕</div></div>
    <div class="ot-list">` + ORDER_TYPES.map(tp=>
      `<div class="ot-row ${tp===orderState.type?'on':''}" data-ordtypepick="${tp}">
        <span>${tp}</span>${tp===orderState.type?`<span class="ot-ck">${I.check}</span>`:''}
      </div>`).join('') + `</div>
  </div>`;
}
function openOrderTypeSheet(){
  closeTxOverlay();
  const screen=document.getElementById('screen'); if(!screen) return;
  const el=document.createElement('div'); el.className='tx-ov'; el.id='txOverlay';
  el.innerHTML=orderTypeSheetHTML();
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}

/* IVR 메뉴 구조도 (디지털ARS/음성ARS 메뉴구조도.jpg 기반)
   - 대메뉴 → 중메뉴 → 소메뉴 3단 아코디언
   - '직원연결' 항목 클릭 시에만 음성 ARS 연결 안내 팝업 */
const A = {t:'0. 직원연결', d:'상담원(직원)에게 바로 연결'};   // 직원연결 리프(공통)
const IVR = [
  {t:'2. 일반주문', subs:[
    {t:'1. 현금매도', d:'보유 주식을 현금으로 매도', go:'order', side:'sell'},
    {t:'2. 현금매수', d:'예수금으로 주식 현금 매수', go:'order', side:'buy'},
    {t:'3. 현금정정', d:'미체결 현금주문 가격·수량 정정', go:'order', side:'modify'},
    {t:'4. 현금취소', d:'미체결 현금주문 취소', go:'order', side:'cancel'},
    {t:'5. 신용매도', d:'신용·대주 매도 주문', subs:[
      {t:'1. 자기융자 매도상환', d:'자기융자 상환을 위한 매도'},
      {t:'2. 대출 매도상환', d:'대출금 상환을 위한 매도'},
      {t:'3. 대주 매도', d:'대주(차입주식) 매도'},
    ]},
    {t:'6. 신용매수', d:'신용융자·대주 매수 주문', subs:[
      {t:'1. 자기융자 매수', d:'자기융자로 주식 매수'},
      {t:'2. 대주 매수상환', d:'대주 상환을 위한 매수'},
    ]},
    {t:'7. K-OTC 주문', d:'비상장주식 K-OTC 주문', subs:[
      {t:'1. K-OTC 매도주문', d:'K-OTC 종목 매도'},
      {t:'2. K-OTC 매수주문', d:'K-OTC 종목 매수'},
      {t:'3. K-OTC 주문정정', d:'K-OTC 미체결 주문 정정'},
      {t:'4. K-OTC 주문취소', d:'K-OTC 미체결 주문 취소'},
      A,
    ]},
    {t:'0. 직원연결', d:'상담원(직원)에게 바로 연결'},
  ]},
  {t:'3. 시세 및 시황', subs:[
    {t:'1. 현재가 및 호가안내', d:'실시간 현재가·호가 안내', subs:[
      {t:'1. 호가잔량', d:'매도·매수 호가 잔량 안내'},
      {t:'2. 5단호가', d:'5단계 호가 잔량 안내'},
      {t:'3. 당일시고저', d:'상·하한가, 시·고·저가 안내'},
      A,
    ]},
    {t:'2. 관심종목·보유종목 현재가 조회', d:'관심·보유종목 시세·주문', subs:[
      {t:'1. 보유종목 현재가 조회 및 주문', d:'보유종목 시세 확인·주문'},
      {t:'2. 관심종목 현재가 조회 및 주문', d:'관심종목 시세 확인·주문'},
      {t:'3. 관심종목 등록', d:'관심종목 신규 등록'},
      {t:'4. 관심종목 삭제', d:'등록된 관심종목 삭제'},
      A,
    ]},
    {t:'3. 지수정보 안내', d:'국내 주요 지수 안내', subs:[
      {t:'1. 종합주가지수', d:'코스피 종합지수·등락 현황', go:'idxKospi'},
      {t:'2. 코스닥 지수', d:'코스닥 지수 안내', go:'idxKosdaq'},
      {t:'3. 코스피 200지수', d:'코스피200 지수 안내', go:'idxKospi200'},
      A,
    ]},
    {t:'4. 해외 지수정보 안내', d:'주요국 증시 지수 안내', subs:[
      {t:'1. 중국관련지수', d:'상해·심천 등 중국 지수'},
      {t:'2. 홍콩관련지수', d:'항셍 등 홍콩 지수'},
      {t:'3. 일본니케이지수', d:'니케이225 지수'},
      {t:'4. 미국관련지수', d:'다우·나스닥·S&P 지수'},
      A,
    ]},
    {t:'5. 환율 안내', d:'주요 통화 환율 안내', subs:[
      {t:'1. 환율안내 다시듣기', d:'환율 안내 다시 듣기'},
      A,
    ]},
    {t:'6. 선물 현재가 조회', d:'지수·상품 선물 현재가', subs:[
      {t:'1. 다른종목조회', d:'다른 선물종목 조회'},
      {t:'2. 현재종목 다시듣기', d:'현재 종목 시세 다시 듣기'},
      A,
    ]},
    {t:'7. 시간외 단일가 시세', d:'시간외 단일가 시세·주문', subs:[
      {t:'1. 시간외 단일가 주문', d:'시간외 단일가 주문'},
      {t:'2. 다른 종목 조회', d:'다른 종목 시간외 시세'},
      {t:'3. 현재종목 시간외단일가시세 다시듣기', d:'현재 종목 시세 다시 듣기'},
      A,
    ]},
    {t:'8. K-OTC 현재가', d:'비상장주식 K-OTC 현재가', subs:[
      {t:'1. ARS K-OTC주문', d:'K-OTC 현재가 확인 후 주문'},
      {t:'2. 다른 K-OTC종목조회', d:'다른 K-OTC 종목 조회'},
      {t:'3. 현재종목 현재가 다시듣기', d:'현재 종목 시세 다시 듣기'},
      A,
    ]},
    {t:'9. 주식 시황', d:'당일 주식시장 시황 안내', subs:[
      {t:'1. 주식시황 다시듣기', d:'주식 시황 다시 듣기'},
      A,
    ]},
    A,
  ]},
  {t:'4. 체결 및 주문내역조회', subs:[
    {t:'1. 금일 체결내역조회', d:'당일 체결된 주문 내역', subs:[
      {t:'1. 전체 조회', d:'당일 전체 체결내역'},
      {t:'2. 종목코드 조회', d:'종목별 체결내역'},
      {t:'3. 주문번호 조회', d:'주문번호별 체결내역'},
      A,
    ]},
    {t:'2. 금일 미체결 내역조회', d:'당일 미체결 주문 내역', subs:[
      {t:'1. 전체 조회', d:'당일 전체 미체결내역'},
      {t:'2. 종목코드 조회', d:'종목별 미체결내역'},
      A,
    ]},
    {t:'3. 금일 주문 내역조회', d:'당일 접수된 주문 내역', subs:[
      {t:'1. 전체 조회', d:'당일 전체 주문내역'},
      {t:'2. 종목코드 조회', d:'종목별 주문내역'},
      {t:'3. 주문번호 조회', d:'주문번호별 주문내역'},
      A,
    ]},
    {t:'4. 전일 체결 내역조회', d:'전일 이전 체결 내역', subs:[
      {t:'1. 체결내역 다시듣기', d:'체결내역 다시 듣기'},
      {t:'2. 다른일자 체결내역조회', d:'다른 일자 체결내역'},
      {t:'3. 다른계좌 체결내역조회', d:'다른 계좌 체결내역'},
      A,
    ]},
    {t:'5. 예약주문 내역조회', d:'예약주문 접수 내역', subs:[
      {t:'1. 예약주문내역 다시듣기', d:'예약주문 내역 다시 듣기'},
      {t:'2. 다른계좌 예약주문내역조회', d:'다른 계좌 예약주문 내역'},
      A,
    ]},
    A,
  ]},
  {t:'5. 계좌잔고 및 거래내역 조회', subs:[
    {t:'1. 예수금 및 추정예탁자산 조회', d:'예수금·추정 예탁자산 조회', subs:[
      {t:'1. 예수금 및 추정예탁자산 다시듣기', d:'예수금·예탁자산 다시 듣기'},
      {t:'2. 빠른주문', d:'바로 주문화면으로'},
      {t:'3. 일반주문', d:'일반 주문화면으로'},
      {t:'4. 다른계좌조회', d:'다른 계좌 잔고조회'},
      A,
    ]},
    {t:'2. 주문가능 금액조회', d:'주문 가능 금액 조회', subs:[
      {t:'1. 전체 주문가능금액조회', d:'전체 주문가능금액'},
      {t:'2. 종목별 주문가능금액조회', d:'종목별 주문가능금액'},
      A,
    ]},
    {t:'3. 현금주식 잔고조회', d:'현금·주식 잔고 조회', subs:[
      {t:'1. 현금유가잔고 다시듣기', d:'현금·유가증권 잔고 다시 듣기'},
      {t:'2. 빠른주문', d:'바로 주문화면으로'},
      {t:'3. 일반주문', d:'일반 주문화면으로'},
      {t:'4. 다른계좌조회', d:'다른 계좌 잔고조회'},
      A,
    ]},
    {t:'4. 신용 잔고조회', d:'신용 잔고 조회', subs:[
      {t:'1. 신용잔고 다시듣기', d:'신용 잔고 다시 듣기'},
      {t:'2. 신용매도주문', d:'신용 매도 주문화면으로'},
      {t:'3. 신용매수주문', d:'신용 매수 주문화면으로'},
      {t:'4. 다른계좌조회', d:'다른 계좌 신용잔고'},
      A,
    ]},
    {t:'5. 거래내역 조회', d:'기간별 거래내역 조회', subs:[
      {t:'1. 전체조회', d:'전체 거래내역'},
      {t:'2. 매매조회', d:'매매 거래내역'},
      {t:'3. 입출금조회', d:'입금·출금 내역'},
      {t:'4. 입출고조회', d:'입고·출고 내역'},
      A,
    ]},
    {t:'6. 금융상품 관련 ARS서비스', d:'펀드·채권 등 금융상품 조회', subs:[
      {t:'1. 평가금액 조회', d:'금융상품 평가금액'},
      {t:'2. 예수금 조회', d:'금융상품 예수금'},
      {t:'3. 거래내역 조회', d:'금융상품 거래내역'},
      A,
    ]},
    A,
  ]},
  {t:'6. 은행이체 및 계좌간 자금이체', subs:[
    {t:'1. 연계은행 송금', d:'연계은행 계좌로 송금'},
    {t:'2. 증권계좌 송금', d:'증권계좌로 송금'},
    {t:'3. 타사 송금', d:'타사 계좌로 송금'},
    {t:'4. 송금결과확인 조회', d:'송금 처리결과 확인'},
    {t:'5. 계좌 간 자금이체', d:'내 계좌 간 자금이체'},
    A,
  ]},
  {t:'7. 주문비밀번호', subs:[
    {t:'1. 주문비밀번호 관련서비스', d:'주문비밀번호 등록·변경', subs:[
      {t:'1. 주문비밀번호 등록', d:'주문비밀번호 신규 등록'},
      {t:'2. 주문비밀번호 변경', d:'주문비밀번호 변경'},
      {t:'3. ARS 이용신청', d:'ARS 주문 이용 신청'},
      {t:'4. ARS 이용해지', d:'ARS 주문 이용 해지'},
      A,
    ]},
    {t:'2. 영업부 계좌개설 비밀번호 등록서비스', d:'영업부 개설계좌 비밀번호 등록'},
    {t:'3. 퀵넘버 플러스 관련서비스', d:'퀵넘버 플러스 조회·삭제', subs:[
      {t:'1. 퀵넘버 플러스 조회', d:'등록된 퀵넘버 조회'},
      {t:'2. 퀵넘버 플러스 삭제', d:'등록된 퀵넘버 삭제'},
      A,
    ]},
    A,
  ]},
  {t:'8. 사고등록 및 ARS 이용안내', subs:[
    {t:'1. 주소 및 전화번호 변경', d:'주소·연락처 정보 변경'},
    {t:'2. 사고등록', d:'분실·도난 등 사고 등록', subs:[
      {t:'1. 계좌출금 정지 사고등록', d:'계좌 출금정지 사고등록'},
      {t:'2. 제휴카드 분실 사고등록', d:'제휴카드 분실 사고등록'},
      {t:'3. OTP 사고등록', d:'OTP 분실·사고 등록'},
      {t:'4. 사고등록 내역조회', d:'등록된 사고내역 조회'},
      A,
    ]},
    {t:'3. ARS 이용안내 및 공지사항', d:'ARS 이용안내·공지사항', subs:[
      {t:'1. ARS 이용시간 안내', d:'ARS 서비스 이용시간'},
      {t:'2. ARS 주문서비스 이용신청 및 주문비밀번호 등록안내', d:'주문서비스 신청·비밀번호 안내'},
      {t:'3. ARS 관심종목 안내', d:'ARS 관심종목 이용 안내'},
      {t:'4. ARS 이용비용 안내', d:'ARS 서비스 이용비용'},
      A,
    ]},
    A,
  ]},
  {t:'9. 유상청약 및 공모주 청약', subs:[
    {t:'1. 유상청약', d:'유상증자 청약 신청·조회', subs:[
      {t:'1. 당일 유상청약 신청', d:'당일 유상청약 신청'},
      {t:'2. 당일 유상청약 취소', d:'당일 유상청약 취소'},
      {t:'3. 유상청약 예약신청 및 취소', d:'유상청약 예약신청·취소'},
      {t:'4. 유상청약 내역확인', d:'유상청약 신청내역 확인'},
      A,
    ]},
    {t:'2. 공모주 청약', d:'공모주(IPO) 청약 신청·조회', subs:[
      {t:'1. 청약입력', d:'공모주 청약 신청'},
      {t:'2. 청약취소', d:'공모주 청약 취소'},
      {t:'3. 은행이체', d:'청약 증거금 은행이체'},
      {t:'4. 청약 경쟁률 조회', d:'공모주 청약 경쟁률'},
      {t:'5. 청약관련 조회', d:'청약 신청내역 조회'},
      {t:'6. 공모주정보 조회', d:'공모주 일정·정보'},
      {t:'7. 공모주 풋백옵션', d:'공모주 풋백옵션 안내'},
      A,
    ]},
    A,
  ]},
];

/* '직원연결' 항목만 음성 ARS 팝업 대상 */
function isAgent(t){ return /직원연결/.test(t); }
/* 표시용 번호 제거 (대메뉴·소메뉴), 중메뉴는 번호 유지 */
function stripNum(t){ return t.replace(/^[0-9#]+\.\s*/,''); }
/* 소메뉴(하위) 없는 항목 클릭 시 안내멘트 */
function connectMsg(label){ return `‘${label}’ 화면으로 연결합니다. (시연용)`; }

/* 메인: 대메뉴만 표기 → 클릭 시 중메뉴/소메뉴 아코디언 화면으로 이동 (data-ivdae) */
function renderIvr(){
  return `<div class="ivlist">` + IVR.map((m,i)=>
    `<div class="ivcard"><div class="ivrow lv1 nav" data-ivdae="${i}"><div class="ivt">${stripNum(m.t)}</div><div class="ivarw">${I.chev}</div></div></div>`
  ).join('') + `</div>`;
}

/* 대메뉴 상세: 중메뉴(펼침) → 소메뉴 아코디언
   - 중메뉴(하위 있음) → 펼쳐서 소메뉴 표기 (data-mid2)
   - 중메뉴(하위 없음) → 화면연결 안내멘트 (data-flash)
   - 소메뉴: 직원연결→팝업 / go(예시화면)→이동 / 그 외→안내멘트
   - 직원연결 중메뉴 → 음성 ARS 팝업 (data-arspop) */
function renderMidAcc(i){
  const subs = (IVR[i]||{}).subs || [];
  return `<div class="ivlist">` + subs.map((s,j)=>{
    if(isAgent(s.t)){
      return `<div class="ivcard"><div class="ivrow lv1 agent" data-arspop="${s.t}"><div class="ivt">${stripNum(s.t)}</div></div></div>`;
    }
    if(!s.subs){
      const attr = s.go==='order' ? `data-orderopen="${s.side||'buy'}" data-ordertitle="${stripNum(s.t)}"` : `data-flash="${connectMsg(stripNum(s.t))}"`;
      return `<div class="ivcard"><div class="ivrow lv1 nav" ${attr}><div class="ivt">${s.t}</div></div></div>`;
    }
    // 소메뉴가 있는 중메뉴 → 다음 페이지(버튼식)로 이동
    return `<div class="ivcard"><div class="ivrow lv1 nav" data-ivsub="${i}_${j}"><div class="ivt">${s.t}</div><div class="ivarw">${I.chev}</div></div></div>`;
  }).join('') + `</div>`;
}

/* 대메뉴 → 중메뉴 리스트 화면 (일반주문) */
function ivMidPage(i){
  const subs = (IVR[i]||{}).subs || [];
  return `<div class="list">` + subs.map((s,j)=>{
    const attr = isAgent(s.t) ? `data-arspop="${s.t}"`
      : s.subs ? `data-ivnav="${i}_${j}"`
      : `data-flash="${connectMsg(stripNum(s.t))}"`;
    return `<div class="row" ${attr}>
      <div class="tx"><div class="t">${s.t}</div></div>
      <div class="chev">${I.chev}</div></div>`;
  }).join('') + `</div>`;
}

/* 소메뉴 클릭 속성 (직원연결→팝업 / 결과화면 이동 / 그 외 안내멘트) */
function ivSubAttr(s, label){
  return isAgent(s.t) ? `data-arspop="${s.t}"`
    : s.go ? `data-s1go="result" data-rk="${s.go}" data-fk="${label}"`
    : `data-flash="${connectMsg(label)}"`;
}
/* 중메뉴 → 소메뉴 버튼식 화면 */
function ivSubPage(mid){
  const subs = (mid && mid.subs) || [];
  // 현재가 및 호가안내 상세: 접속 시 종목검색만, 종목 검색 후 현재가 카드 + 한줄 탭(소메뉴)
  if(/현재가 및 호가/.test((mid && mid.t) || '')){
    const stockCell = txFilter.stock
      ? `<span class="stk-nm">${txFilter.stock}</span><span class="stk-x" data-stockclear title="종목 지우기">${I.x}</span>`
      : `<span class="ph">종목명을 검색하세요</span>`;
    const searchBar = `<div class="stk-find" data-stocksearch>${I.search}${stockCell}</div>`;
    if(!txFilter.stock) return searchBar;   // 검색 전: 종목검색만 표시
    // 카드 내부에 종목코드·밑줄형 호가 탭·탭별 호가정보 포함
    return searchBar + stockQuoteCard(txFilter.stock);
  }
  // 신용매수 상세: 소메뉴 리스트만 표시 (자기융자 매수 → 종목검색+주문카드 화면으로 이동)
  if(/신용매수/.test((mid && mid.t) || '')){
    return `<div class="iv-btns">` + subs.map(s=>{
      const label = stripNum(s.t);
      const attr = /자기융자\s*매수/.test(s.t) ? 'data-creditbuy' : ivSubAttr(s, label);
      return `<div class="iv-btn" ${attr}>${label}</div>`;
    }).join('') + `</div>`;
  }
  // 신용매도 상세: 소메뉴 리스트만 표시 (자기융자 매도상환 → 종목검색+주문카드 화면으로 이동)
  if(/신용매도/.test((mid && mid.t) || '')){
    return `<div class="iv-btns">` + subs.map(s=>{
      const label = stripNum(s.t);
      const attr = /자기융자\s*매도상환/.test(s.t) ? 'data-creditsell' : ivSubAttr(s, label);
      return `<div class="iv-btn" ${attr}>${label}</div>`;
    }).join('') + `</div>`;
  }
  // 그 외 중메뉴: 기존 소메뉴 버튼식
  if(!subs.length){
    return `<div class="iv-btns"><div class="iv-btn" data-flash="${connectMsg(stripNum(mid.t))}">${stripNum(mid.t)}</div></div>`;
  }
  return `<div class="iv-btns">` + subs.map(s=>{
    const label = stripNum(s.t);
    return `<div class="iv-btn" ${ivSubAttr(s, label)}>${label}</div>`;
  }).join('') + `</div>`;
}

/* 전체메뉴: 음성 ARS 메뉴 3단 아코디언 (대분류→중분류→소분류 인라인 펼침) */
/* 자주 찾는 서비스 메뉴구조 (메뉴구조도/자주찾는서비스.jpg 기반) — 대분류→중분류 */
const FAV_MENU = [
  {t:'1. 국내주식', subs:[
    {t:'주식주문 및 체결내역조회'},
  ]},
  {t:'2. ID/PW · 인증서', subs:[
    {t:'신규계좌 및 공인인증'},
  ]},
  {t:'3. 미수 · 신용대출', subs:[
    {t:'미수, 신용대출 약정 및 단순문의'},
    {t:'계좌조회 및 대출신청, ETF문의'},
  ]},
  {t:'4. 권리', subs:[
    {t:'권리 및 공모주, 제증명서'},
  ]},
  {t:'5. 시스템', subs:[
    {t:'HTS, MTS 등 시스템 관련'},
  ]},
  {t:'6. 선물옵션', subs:[
    {t:'선물옵션 및 ELW'},
  ]},
  {t:'7. 해외주식', subs:[
    {t:'해외주식 및 국내복귀계좌'},
  ]},
  {t:'8. 금융상품', subs:[
    {t:'연금, ISA 계좌개설 및 서면형 가입서류'},
    {t:'펀드, 채권, ELS 및 계좌상세'},
  ]},
  {t:'9. CFD', subs:[
    {t:'국내주식 CFD'},
    {t:'해외주식 CFD 및 환헷지, 상품선물옵션'},
  ]},
];
/* 시안2(dars1) 메인 탭 드릴다운에서 참조 — 인라인 스크립트로 IVR/FAV_MENU 데이터 노출 */
window.IVR = IVR; window.FAV_MENU = FAV_MENU;

/* 시안1 V2.0 · 단순 ARS 메뉴트리 = 음성ARS 메뉴구조도(IVR) 그대로를 번호순 드릴다운으로 탐색.
   메뉴 연결(이동)만 제공하고 최종(리프) 화면은 열지 않음 — renderSimpleArs() 참고. */

/* 전체메뉴 드로어 (오른쪽→왼쪽 슬라이드) */
function openMenuDrawer(){
  closeMenuDrawer();
  const screen = document.getElementById('screen'); if(!screen) return;
  const el = document.createElement('div');
  el.className = 'menu-ov'; el.id = 'menuDrawer';
  const isV21 = isV21Ver();
  // V2.1/전체메뉴 펼치기: 홈버튼을 헤더 왼쪽에 배치 + 상단 pills 제거(좌측 3대메뉴로 대체)
  const head = isV21
    ? `<div class="menu-head">
         <div class="back home-wbtn" data-home title="홈">${I.home}</div>
         <div class="page-title">전체메뉴</div>
         <div class="head-spacer"></div>
         <div class="back" data-menuclose title="닫기">${I.x}</div>
       </div>`
    : `<div class="menu-head">
         <div class="page-title">전체메뉴</div>
         <div class="head-spacer"></div>
         <div class="back" data-menuclose title="닫기">${I.x}</div>
       </div>
       <div class="menu-pills">${amPills()}</div>`;
  el.innerHTML = `<div class="menu-panel">
    ${head}
    <div class="menu-scroll">${renderAllMenu()}</div>
  </div>`;
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}
function closeMenuDrawer(){
  const el = document.getElementById('menuDrawer');
  if(el){ el.classList.remove('on'); setTimeout(()=>{ if(el.parentNode) el.remove(); }, 300); }
}
/* 자주 찾는 서비스 추가 바텀시트 (favmore 빈 슬롯 클릭 → 후보 선택 → FAV 추가) */
function openFavAdd(){
  const screen = document.getElementById('screen'); if(!screen) return;
  closeFavAdd();
  const el = document.createElement('div'); el.className='fav-add-ov'; el.id='favAddOv';
  const list = FAV_ADD.length
    ? FAV_ADD.map((f,i)=>`<div class="fa-row" data-favpick="${i}"><div class="fa-ic">${I[f.ic]}</div><div class="fa-nm">${f.k}</div><div class="fa-plus">${I.plus}</div></div>`).join('')
    : `<div class="fa-none">추가할 수 있는 서비스를 모두 추가했습니다.</div>`;
  el.innerHTML = `<div class="fav-add-sheet">
    <div class="fa-head"><div class="fa-title">자주 찾는 서비스 추가</div><div class="back" data-favaddclose>${I.x}</div></div>
    <div class="fa-list">${list}</div>
  </div>`;
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}
function closeFavAdd(){
  const el = document.getElementById('favAddOv');
  if(el){ el.classList.remove('on'); setTimeout(()=>{ if(el.parentNode) el.remove(); }, 250); }
}
function refreshMenu(){
  const dr = document.getElementById('menuDrawer');
  if(dr){
    const p = dr.querySelector('.menu-pills'); if(p) p.innerHTML = amPills();
    const s = dr.querySelector('.menu-scroll'); if(s) s.innerHTML = renderAllMenu();
  } else renderS1();
}

/* 세그먼트 버튼 (간편모드 계좌조회 국내/미국/상품/현금 디자인) — 헤더와 함께 고정 */
function amPills(){
  const tab = s1state.amTab || 'ars';
  return `<div class="hero-folder">
    <div class="hf-pills">
      <div class="back hf-home" data-home title="홈">${I.home}</div>
      <button class="hf-pill ${tab==='ars'?'on':''}" data-amtab="ars">ARS메뉴</button>
      <button class="hf-pill ${tab==='fav'?'on':''}" data-amtab="fav">상담원연결</button>
    </div>
  </div>`;
}
/* V2.1 전체메뉴: 좌측 3 대메뉴(셀프서비스/ARS/상담원연결) + 우측 중첩 아코디언 */
/* 셀프서비스 트리: 중메뉴=FAV 서비스, 소메뉴=각 서비스 하위 항목(rk=결과화면 키). 폼형 서비스는 리프 */
const SELF_MENU = [
  {t:'ID·계좌조회 / PW재설정', subs:[
    {t:'아이디(ID) 조회', rk:'idpwfind'},
    {t:'계좌번호 조회',   rk:'acctfind'},
    {t:'ID비밀번호 재설정', rk:'idpwreset'},
    {t:'장기미사용 ID 제한해제', rk:'idrelease'},
  ]},
  {t:'비대면업무 신청현황', subs:[
    {t:'비대면 계좌개설', rk:'untactacct'},
    {t:'출금계좌등록',    rk:'untactwithdraw'},
    {t:'모바일 OTP 발급', rk:'untactotp'},
    {t:'OTP 사고해지',    rk:'untactotpcancel'},
    {t:'계좌폐쇄',        rk:'untactclose'},
    {t:'계좌비밀번호 재설정', rk:'untactpw'},
  ]},
  {t:'계좌잔고 및 거래내역조회', subs:[
    {t:'계좌잔고·예수금 조회', rk:'holdings'},
    {t:'거래 내역', rk:'trades'},
    {t:'체결 내역', rk:'filled'},
  ]},
  {t:'계좌사고 등록 / 해지', rk:'accidentcancel'},
  {t:'고객확인등록(CDD/EDD)', rk:'cdd'},
  {t:'서류발급 및 신청내역조회', subs:[
    {t:'잔고증명서',     rk:'certbal'},
    {t:'거래내역서',     rk:'certtx'},
    {t:'외납세액명세서', rk:'certforeign'},
    {t:'양도소득내역서', rk:'certgains'},
  ]},
  {t:'신용/대출 만기연장', rk:'creditext'},
  {t:'공모주 청약', subs:[
    {t:'청약 경쟁률 조회', rk:'iporate'},
    {t:'환불·배정 조회',   rk:'iporesult'},
    {t:'청약 내역 조회',   rk:'ipohist'},
  ]},
  {t:'간편/공동인증 관리', subs:[
    {t:'간편비밀번호(PIN) 변경', rk:'idpwpin'},
    {t:'생체인증 등록',          rk:'authbio'},
    {t:'공동인증서 갱신/재발급',  rk:'authcert'},
    {t:'간편/공동인증 해지',      rk:'authrevoke'},
  ]},
];
window.SELF_MENU = SELF_MENU;   // 시안2(dars1) 전체메뉴 드로어에서 참조
function v21LeafAttr(m, label, cat){
  if(m.staff) return `data-arspop="${m.staff}"`;   // 수요 카테고리(ARS_CAT6) 직원연결 매핑 → 상담원 연결 화면
  if(isAgent(m.t)) return `data-arspop="${m.t}"`;
  if(cat==='staff') return `data-staffconnect="${label}"`;
  if(cat==='self')  return `data-s1go="result" data-rk="${m.rk}" data-fk="${label}"`;
  // ARS(IVR) 리프: 전용 화면 있으면 그 화면, 없으면 안내
  if(/자기융자\s*매도상환/.test(m.t)) return `data-creditsell`;
  if(/자기융자\s*매수/.test(m.t)) return `data-creditbuy`;
  if(m.go==='order') return `data-orderopen="${m.side||'buy'}" data-ordertitle="${label}"`;
  if(m.go) return `data-s1go="result" data-rk="${m.go}" data-fk="${label}"`;
  return `data-flash="${connectMsg(label)}"`;
}
function renderAccTree(items, prefix, cat, forceOpen){
  return items.map((m,i)=>{
    const path = prefix ? prefix+'_'+i : ''+i;
    if(m.subs && m.subs.length){
      const open = forceOpen || !!s1state.amTreeOpen[path];   // forceOpen=전체메뉴 펼치기(모두 펼침)
      const kids = open ? `<div class="amv-sub">${renderAccTree(m.subs, path, cat, forceOpen)}</div>` : '';
      return `<div class="amv-node ${open?'open':''}">
        <div class="amv-row nav" data-amacc="${path}"><div class="ivt">${m.t}</div><div class="ivarw">${I.down}</div></div>
        ${kids}</div>`;
    }
    const label = stripNum(m.t);
    const isAg = isAgent(m.t);
    return `<div class="amv-row leaf ${isAg?'agent':''}" ${v21LeafAttr(m,label,cat)}><div class="ivt">${isAg?label:m.t}</div>${isAg?'':`<div class="ivarw nav">${I.chev}</div>`}</div>`;
  }).join('');
}
function renderV21Menu(forceOpen){
  const cat = s1state.amCat || 'self';
  const cats = [['self','셀프서비스'],['ars','ARS'],['staff','상담원연결']];
  const left = cats.map(([k,nm])=>`<div class="am-dae ${k===cat?'on':''}" data-amcat="${k}">${nm}</div>`).join('');
  const tree = cat==='ars' ? (s1Ver==='v40' ? ARS_CAT6 : IVR) : cat==='staff' ? FAV_MENU : SELF_MENU;
  const right = `<div class="amv-list">${renderAccTree(tree, '', cat, forceOpen)}</div>`;
  return `<div class="am2col v21col"><div class="am-left">${left}</div><div class="am-right">${right}</div></div>`;
}
function renderAllMenu(forceTab){
  // 시안1 V2.1 · 전체메뉴를 3 대메뉴 + 중첩 아코디언 구조로 분기
  if(isV21Ver() && !forceTab) return renderV21Menu();
  const tab = forceTab || s1state.amTab || 'ars';
  // 시안1 V2.0/V2.1 · ARS메뉴는 '단순 ARS 메뉴트리'(음성ARS 번호 드릴다운)로 분기
  if(tab==='ars' && (s1Ver==='v2' || isV21Ver())) return renderSimpleArs();
  // 탭에 따라 메뉴 데이터 선택 (자주찾는서비스 / 보이는 ARS) — 동일한 2단 아코디언 형태
  const menu = (tab==='fav') ? FAV_MENU : IVR;
  const sel = s1state.amOpen < 0 ? 0 : Math.min(s1state.amOpen, menu.length-1);
  // 좌측: 대메뉴 리스트
  const left = menu.map((m,i)=>
    `<div class="am-dae ${i===sel?'on':''}" data-am1="${i}">${stripNum(m.t)}</div>`
  ).join('');
  // 우측: 선택된 대메뉴의 중메뉴 (소메뉴는 인라인 펼침)
  const dae = menu[sel] || {subs:[]};
  let right;
  if(!dae.subs || !dae.subs.length){
    // 중메뉴가 없는 대분류 → 단일 연결 행 (직원연결 탭은 상담부서 연결)
    const label = stripNum(dae.t);
    const fb = (tab==='fav') ? `data-staffconnect="${label}"` : `data-flash="${connectMsg(label)}"`;
    right = `<div class="am-mid" ${fb}><div class="ivt">${label}</div></div>`;
  } else {
    right = dae.subs.map((s,j)=>{
      if(isAgent(s.t)){
        return `<div class="am-mid agent" data-arspop="${s.t}"><div class="ivt">${stripNum(s.t)}</div></div>`;
      }
      if(!s.subs){
        const lbl = stripNum(s.t);
        const attr = s.go==='order' ? `data-orderopen="${s.side||'buy'}" data-ordertitle="${lbl}"`
          : s.go ? `data-s1go="result" data-rk="${s.go}" data-fk="${lbl}"`
          : (tab==='fav' ? `data-staffconnect="${lbl}"` : `data-flash="${connectMsg(lbl)}"`);
        return `<div class="am-mid" ${attr}><div class="ivt">${s.t}</div></div>`;
      }
      // 소메뉴가 있는 중메뉴 → 소메뉴를 인라인 아코디언으로 펼침 (보이는 ARS·직원연결 공통)
      // 소메뉴 클릭 시: 전용 소메뉴 화면 있으면 그 화면으로, 없으면 상위 중메뉴(소메뉴 리스트) 화면으로 이동
      const open2 = s1state.amOpen2===j;
      const sub = `<div class="am-sub">` + s.subs.map(x=>{
        const label = stripNum(x.t);
        let attr, nav=true;
        if(isAgent(x.t)){ attr = `data-arspop="${x.t}"`; nav=false; }
        else if(/자기융자\s*매도상환/.test(x.t)) attr = `data-creditsell`;
        else if(/자기융자\s*매수/.test(x.t)) attr = `data-creditbuy`;
        else if(x.go==='order') attr = `data-orderopen="${x.side||'buy'}" data-ordertitle="${label}"`;
        else if(x.go) attr = `data-s1go="result" data-rk="${x.go}" data-fk="${label}"`;
        else if(tab!=='fav') attr = `data-ivsub="${sel}_${j}"`;   // 전용 소메뉴 화면 없음 → 상위 중메뉴 화면(ivsub)으로
        else { attr = `data-flash="${connectMsg(label)}"`; nav=false; }
        return `<div class="ivrow lv3" ${attr}><div class="ivt">${label}</div>${nav?`<div class="ivarw nav">${I.chev}</div>`:''}</div>`;
      }).join('') + `</div>`;
      return `<div class="am-node ${open2?'open':''}">
        <div class="am-mid" data-am2="${j}"><div class="ivt">${s.t}</div><div class="ivarw">${I.down}</div></div>
        ${sub}</div>`;
    }).join('');
  }
  return `<div class="am2col">
    <div class="am-left">${left}</div>
    <div class="am-right">${right}</div>
  </div>`;
}

/* 시안1 V2.0 · 단순 ARS 메뉴트리 렌더 (음성ARS 구조도 번호 드릴다운 · 최종화면 미연결)
   - s1state.sarsPath: IVR 트리를 따라 내려간 인덱스 경로
   - 하위 메뉴 있으면 → 다음 단계로 이동(번호순) / 리프면 → 최종 메뉴(화면 안 열림) */
function sarsWalk(tree, path){
  let items = tree; const trail = [];
  for(const idx of (path||[])){
    const n = items[idx];
    if(!n || !n.subs) break;
    trail.push(n); items = n.subs;
  }
  return {items, trail};
}
/* 번호 드릴다운 트리 렌더 (음성ARS·상담원연결 공통)
   opts.crumb: 브레드크럼 접두 / opts.guide: 루트 안내문 / opts.leaf: 'staff'면 리프=상담원 연결, 아니면 최종(미연결) */
function renderArsTree(tree, opts){
  opts = opts || {};
  const path = s1state.sarsPath || [];
  const {items, trail} = sarsWalk(tree, path);
  const head = trail.length
    ? `<div class="sars-path">${opts.crumb||''}${trail.map(n=>stripNum(n.t)).join(' › ')}</div>`
    : `<div class="sars-guide">${opts.guide||'원하시는 번호를 선택하세요.'}</div>`;
  const back = path.length
    ? `<div class="sars-back" data-sarsup><span class="sars-bk">${I.chev}</span><span>이전 메뉴</span></div>` : '';
  const isStaff = (opts.leaf==='staff');
  const rows = items.map((m,i)=>{
    const num = (m.t.match(/^[0-9#]+/)||[''])[0];
    const name = stripNum(m.t);
    const hasKids = !!(m.subs && m.subs.length);
    if(hasKids){
      return `<div class="sars-item nav" data-sarsdown="${i}">
        <span class="sars-num">${num}</span><div class="ivt">${name}</div>
        <span class="sars-arw">${I.chev}</span></div>`;
    }
    // 리프 라우팅: (mapStaff 시) 직원연결 매핑·0.직원연결 → 상담원 연결 화면 / 상담원연결 트리 → 연결 / 음성ARS → 최종(화면 미연결)
    const wantStaff = opts.mapStaff && (m.staff || isAgent(m.t));
    let leafAttr, tag, cls = '';
    if(wantStaff){ leafAttr = `data-arspop="${m.staff || stripNum(m.t)}"`; tag = `<span class="sars-end staff">직원연결</span>`; cls = 'staffleaf'; }
    else if(isStaff){ leafAttr = `data-staffconnect="${name}"`; tag = `<span class="sars-end staff">연결</span>`; cls = 'staffleaf'; }
    else { leafAttr = `data-sarsleaf="${name}"`; tag = `<span class="sars-end">최종</span>`; }
    return `<div class="sars-item leaf ${cls}" ${leafAttr}>
      <span class="sars-num leaf">${num||'·'}</span><div class="ivt">${name}</div>
      ${tag}</div>`;
  }).join('');
  return `<div class="sars-wrap">
    ${head}${back}
    <div class="sars-list">${rows}</div>
  </div>`;
}
/* Ver 4.0(v40) 전용: 사용자 지정 9 대메뉴 + 상담·챗봇 수요 매핑.
   각 항목은 IVR 실제 노드를 참조(드릴다운 소메뉴 전량 보존)하거나, 대응 소메뉴가 없으면 {staff}=관련 직원연결(상담원 연결 화면)로 매핑.
   IVR 인덱스: 0=일반주문 1=시세및시황 2=체결및주문내역 3=계좌잔고 4=은행이체 5=주문비밀번호 6=사고등록 7=유상청약및공모주
   ※시세및시황(IVR[1])은 1번 대메뉴 '주문·체결확인'에 하위 그룹으로 포함. ※식별자 ARS_CAT6는 레거시명(현재 9개). */
function ivN(d, m){ const s = (IVR[d]||{}).subs; return s ? s[m] : undefined; }
function drillNode(name, node){ return node ? Object.assign({}, node, {t:name}) : {t:name}; }   // IVR 노드 참조(소메뉴 보존) + 표시명 교체
function staffLeaf(name){ return {t:name, staff:name}; }                                          // 대응 소메뉴 없음 → 직원연결(상담원 연결 화면)
function catNode(title, ic, items){
  return {t:title, ic, subs: items.map((it,i)=>Object.assign({}, it, {t:(i+1)+'. '+it.t}))};      // 카테고리 내 항목 1..N 재번호(하위 소메뉴 번호는 원본 유지)
}
const ARS_CAT6 = [
  catNode('1. 주문·체결확인', 'order', [
    drillNode('현금매도', ivN(0,0)),
    drillNode('현금매수', ivN(0,1)),
    drillNode('현금정정', ivN(0,2)),
    drillNode('현금취소', ivN(0,3)),
    drillNode('신용매도', ivN(0,4)),
    drillNode('신용매수', ivN(0,5)),
    drillNode('K-OTC 주문', ivN(0,6)),
    drillNode('시세 및 시황', IVR[1]),   // 시세및시황 대메뉴(현재가/호가/지수/해외지수/환율/선물/시간외/K-OTC/시황) 전체를 하위 그룹으로 포함
    drillNode('금일 체결내역 조회',    ivN(2,0)),
    drillNode('금일 미체결 내역 조회', ivN(2,1)),
    drillNode('금일 주문내역 조회',    ivN(2,2)),
    drillNode('전일 체결내역 조회',    ivN(2,3)),
    drillNode('예약주문 내역조회',     ivN(2,4)),
  ]),
  catNode('2. 계좌·잔고조회', 'wallet', [
    drillNode('예수금·추정예탁자산 조회', ivN(3,0)),
    drillNode('현금주식 잔고조회',        ivN(3,2)),
    drillNode('신용 잔고조회',            ivN(3,3)),
    drillNode('주문가능 금액조회',        ivN(3,1)),
    drillNode('거래내역 조회',            ivN(3,4)),
    drillNode('금융상품 평가·잔고 조회',  ivN(3,5)),
    staffLeaf('미수·반대매매 조회'),
    staffLeaf('계좌번호·MY계좌 정보확인'),
  ]),
  catNode('3. 입출금·이체', 'transfer', [
    drillNode('연계은행 송금',    ivN(4,0)),
    drillNode('증권계좌 송금',    ivN(4,1)),
    drillNode('타사 송금',        ivN(4,2)),
    drillNode('계좌 간 자금이체',  ivN(4,4)),
    drillNode('송금결과확인 조회', ivN(4,3)),
    staffLeaf('출금불가·출금제한 임시조치 해지'),
    staffLeaf('환전'),
  ]),
  catNode('4. 인증·비밀번호', 'shield', [
    drillNode('주문비밀번호 등록·변경',   ivN(5,0)),
    drillNode('퀵넘버 플러스 조회·삭제',   ivN(5,2)),
    drillNode('영업부 계좌개설 비밀번호 등록', ivN(5,1)),
    staffLeaf('계좌 비밀번호 변경'),
    staffLeaf('ID조회·PW초기화 / 재설정'),
    staffLeaf('간편/공동인증 등록·해지'),
    staffLeaf('장기미사용 ID 제한해제'),
  ]),
  catNode('5. 계좌개설·사고', 'idcard', [
    drillNode('사고등록',          ivN(6,1)),
    drillNode('주소·전화번호 변경', ivN(6,0)),
    staffLeaf('계좌 사고등록 해지'),
    staffLeaf('비대면 계좌개설'),
    staffLeaf('계좌폐쇄'),
    staffLeaf('신분증 진위확인'),
  ]),
  catNode('6. 공모주·유상청약', 'ipo', [
    drillNode('유상청약',    ivN(7,0)),
    drillNode('공모주 청약', ivN(7,1)),
  ]),
  catNode('7. 서류신청·제출', 'cert', [
    staffLeaf('제증명 발급신청'),
    staffLeaf('잔고증명서'),
    staffLeaf('거래내역서'),
    staffLeaf('금융거래목적확인서 제출'),
    staffLeaf('고객확인(KYC/CDD) 등록'),
    staffLeaf('투자자정보확인서 등록'),
    staffLeaf('해외 양도소득 관련서류'),
  ]),
  catNode('8. 업무신청', 'doc', [
    staffLeaf('모바일 OTP 발급'),
    staffLeaf('출금계좌 등록'),
    staffLeaf('외화 출금계좌 등록'),
    staffLeaf('온라인 실명확인'),
    staffLeaf('유가증권 대체출고(타명의)'),
    staffLeaf('타사대체출고'),
    staffLeaf('해외주식 입/출고'),
    staffLeaf('중개형ISA 이관/이수'),
    staffLeaf('신용/대출 만기연장'),
  ]),
  catNode('9. 공지·이용안내', 'bell', [
    drillNode('ARS 이용안내 및 공지사항', ivN(6,2)),
    staffLeaf('서비스 점검·공지사항'),
    staffLeaf('이벤트 안내'),
  ]),
];

/* 음성 ARS 메뉴트리 (V2.0/V2.1 ARS메뉴) — Ver 4.0은 수요 9 카테고리(ARS_CAT6, 직원연결 매핑 활성), 그 외는 원본 IVR */
function usesCat(){ return s1Ver==='v40'; }   // ARS_CAT6(9 카테고리) + 직원연결 매핑 사용 버전
function renderSimpleArs(){ return renderArsTree(usesCat() ? ARS_CAT6 : IVR, {guide:'원하시는 서비스를 선택하세요.', crumb:'음성 ARS · ', mapStaff:usesCat()}); }
/* 상담원 연결 메뉴트리 (V2.1 메인 · ARS메뉴와 동일 번호 드릴다운 구성) */
function renderStaffTree(){ return renderArsTree(FAV_MENU, {guide:'상담 분야의 번호를 선택하세요.', crumb:'상담원 연결 · ', leaf:'staff'}); }

/* 상담원(직원) 연결 화면 */
function agentConnectScreen(label){
  const nm = (label && label!=='직원연결') ? stripNum(label) : '';
  const desc = nm ? `‘${nm}’ 관련 상담부서로<br>상담원(직원)에게 연결해 드립니다.`
    : `상담원(직원)에게 바로 연결해 드립니다.<br>아래 버튼을 눌러 상담을 시작하세요.`;
  return `<div class="agent-connect">
    <div class="ac-ic">${I.headset}</div>
    <div class="ac-t">상담원 연결</div>
    <div class="ac-d">${desc}</div>
    <div class="ac-info">
      ${nm ? `<div class="ac-row"><span class="k">상담 분야</span><span class="v">${nm}</span></div>` : ''}
      <div class="ac-row"><span class="k">상담 가능 시간</span><span class="v">평일 08:00 ~ 18:00</span></div>
      <div class="ac-row"><span class="k">예상 대기</span><span class="v">약 1분</span></div>
    </div>
    <div class="primary-btn" data-flash="상담원에게 연결합니다. (시연용)">상담원 연결하기</div>
    <div class="notice">연결 시 음성 통화 또는 채팅 상담으로 진행됩니다.</div>
  </div>`;
}

/* 음성 ARS 연결 화면 */
function voiceConnectScreen(){
  return `<div class="agent-connect">
    <div class="ac-ic">${I.phone}</div>
    <div class="ac-t">음성 ARS 연결 중</div>
    <div class="ac-d">키움증권 음성 ARS에 연결하고 있습니다.<br>잠시만 기다려 주세요.</div>
    <div class="ac-info">
      <div class="ac-row"><span class="k">연결 번호</span><span class="v">1544-9000</span></div>
      <div class="ac-row"><span class="k">상태</span><span class="v">연결 중…</span></div>
      <div class="ac-row"><span class="k">예상 대기</span><span class="v">약 30초</span></div>
    </div>
    <div class="primary-btn" data-s1back>통화 종료</div>
    <div class="notice">음성 안내에 따라 키패드를 입력하시면 상담이 진행됩니다.</div>
  </div>`;
}

/* 음성 ARS 연결 안내 팝업 */
function showPopup(label){
  closeModal();
  const name = label ? label.replace(/^[0-9#]+\.\s*/,'') : '';
  const msg = name ? `‘${name}’ 메뉴는<br>음성 ARS 상담으로 연결됩니다.` : `음성 ARS 상담으로<br>연결해 드립니다.`;
  const screen = document.getElementById('screen');
  const el = document.createElement('div');
  el.className = 'modal-ov'; el.id = 'arsModal';
  el.innerHTML = `<div class="modal">
    <div class="m-ic">${I.phone}</div>
    <div class="m-t">음성 ARS 연결 안내</div>
    <div class="m-d">${msg}</div>
    <div class="m-btns">
      <button class="m-btn cancel" data-mcancel>취소</button>
      <button class="m-btn ok" data-mok>연결하기</button>
    </div>
  </div>`;
  screen.appendChild(el);
}
function closeModal(){ const m=document.getElementById('arsModal'); if(m) m.remove(); }

/* ---------- 상태 ---------- */
let mode = '간편';     // 일반 | 간편
let bigFont = false;
let scheme = 's1';

function applyScale(){
  let s = mode==='간편' ? 1.06 : 1.0;
  if(bigFont) s += 0.12;
  document.documentElement.style.setProperty('--scale', s.toFixed(3));
}

/* ---------- 공통 헤더 ---------- */
function header(title, menu=true){
  return `<div class="app-head">
    <div class="logo"><img src="assets/kiwoom-logo.png" alt="키움증권"></div>
    <div class="head-spacer"></div>
    <div class="center-badge" data-skipauth title="본인인증 생략 (시연)">고객센터 <b>원활</b><span class="dot"></span></div>
    ${menu ? `<div class="back" data-menu title="전체메뉴">${I.menu}</div>` : ''}
  </div>`;
}
const NOTICES = [
  '[공지] 디지털 ARS 서비스 정기점검 안내 (6/25 02:00~04:00)',
  '[안내] 공모주 청약 — 에이펙스반도체 6/24~6/25 진행',
  '[이벤트] 중개형 ISA 타사 이전 시 최대 551만원 혜택',
];
function noticeCard(){
  const track = NOTICES.map(t=>`<span class="ni">${t}</span>`).join('');
  return `<div class="center-status" data-flash="공지사항 전체보기로 이동합니다.">
    <div class="marquee"><div class="mtrack">${track}${track}</div></div>
    <div class="more">전체 ${I.chev}</div>
  </div>`;
}
/* Ver 4.0 · 토스 스타일 카테고리 리스트 (단색 마젠타 아이콘칩 + 볼드 라벨 + 설명글 + chevron) */
const V40_DESC = [
  '주식을 사고팔고, 체결·주문 내역을 확인해요',
  '예수금과 잔고, 거래내역을 조회해요',
  '은행↔증권 입출금과 계좌 간 이체를 해요',
  '비밀번호를 바꾸고 인증서를 관리해요',
  '계좌를 새로 만들거나 사고를 신고·해지해요',
  '공모주와 유상증자 청약을 신청해요',
  '증명서를 발급받고 필요한 서류를 제출해요',
  'OTP 발급, 출금계좌 등록 등을 신청해요',
  '서비스 공지와 ARS 이용방법을 안내해요',
];
function tossCatList(){
  return `<div class="toss-list">` + ARS_CAT6.map((cat,i)=>
    `<div class="toss-cat" data-sarsdown="${i}">
      <div class="tc-ic">${I[cat.ic]||I.order}</div>
      <div class="tc-body"><div class="tc-nm">${stripNum(cat.t)}</div><div class="tc-desc">${V40_DESC[i]||''}</div></div>
      <div class="tc-arw">${I.chev}</div>
    </div>`
  ).join('') + `</div>`;
}
/* Ver 4.0 · '상담 없이 해결할 수 있어요' 자가해결 카드 (토스 IMG_5635 참고) — 기본 1개만, 화살표로만 펼침/접기 */
/* FAQ 카드 아이콘: 사이버보안 스타일의 자체 제작 원본 라인 SVG (외부 에셋·라이선스 불필요) */
const V40_FAQ = [
  {t:'입출금이 안돼요',   svg:'<img src="assets/error.png" alt="입출금 오류">'},
  {t:'각종 증명서 발급', svg:'<img src="assets/certificate.png" alt="증명서 발급">'},
  {t:'각종 서류 제출',   svg:'<img src="assets/file-upload.png" alt="서류 제출">'},
  {t:'자주 묻는 질문',   svg:'<img src="assets/question.png" alt="자주 묻는 질문">'},
];
function tossFaqCard(){
  const open = !!s1state.faqOpen;
  const shown = open ? V40_FAQ : V40_FAQ.slice(0, 1);
  const rows = shown.map(it=>{
    // '입출금이 안돼요'는 실제 업무 플로우(계좌 인증 → 상태 확인 → 결과) 진입, 나머지는 시연용 안내
    const act = it.t==='입출금이 안돼요' ? `data-iodstart` : `data-flash="‘${it.t}’ 도움말 화면으로 이동합니다. (시연용)"`;
    return `<div class="tf-row" ${act}><div class="tf-ic">${it.svg}</div><div class="tf-t">${it.t}</div><div class="tf-arw">${I.chev}</div></div>`;
  }).join('');
  return `<div class="toss-faq">
    <div class="tf-head" data-faqtoggle title="${open?'접기':'더보기'}">
      <div class="tf-title">혹시 이런 내용이 궁금하신가요?</div>
      <div class="tf-toggle ${open?'open':''}">${I.down}</div>
    </div>
    <div class="tf-list">${rows}</div>
  </div>`;
}
function banner(){
  return `<div class="banner">
    <div class="big">최대 551<small>만원</small></div>
    <div class="mid">중개형 ISA 혜자 이벤트</div>
    <div class="sub">타사 이전 시 혜택기회 UP!</div>
    <div class="rocket">🚀</div>
  </div>`;
}
function tabbar(active){
  return `<div class="tb" data-tab="voice">${I.phone}<span>음성ARS</span></div>
    <div class="tb" data-tab="chat">${I.chat}<span>챗봇</span></div>
    <div class="tb end" data-tab="end">${I.power}<span>서비스종료</span></div>`;
}

/* 앱 하단 푸터 (간편모드 메뉴 하단 스타일) */
function appFooter(){
  return `<div class="app-foot">
    <img src="assets/kiwoom-logo.png" alt="키움증권">
    <div class="foot-tx">
      고객센터 1544-9000 · 평일 08:00~18:00<br>
      서울특별시 영등포구 여의나루로4길 18 키움금융센터<br>
      ⓒ Kiwoom Securities Co., Ltd. All rights reserved.
    </div>
  </div>`;
}

/* ============================================================
   시안 1 화면 렌더
   ============================================================ */
const s1state = {page:'home', cat:'금융상품', open:-1, open2:-1, title:'', listKey:'', resultKey:'', ivI:-1, ivJ:-1, midOpen:-1, amOpen:-1, amOpen2:-1, amTab:'ars', sarsPath:[], v21Tab:'self', amCat:'self', amTreeOpen:{}, faqOpen:false, priceTab:'hoga', fromFav:false, authNext:'', authMethod:'', acctPw:'', otpSent:false, noBack:false, noHome:false, history:[]};
// 본인인증 세션 유지 플래그 (메모리 변수 → 새로고침 시 자동 초기화)
let sessionAuthed = false;

/* 화면 이동: 현재 상태를 history에 쌓고 새 화면으로 */
function s1nav(patch){
  closeMenuDrawer();               // 화면 이동 시 전체메뉴 드로어 닫기
  closeConsult();                  // 상담연결 팝업 열려있으면 닫기
  s1state.history.push({page:s1state.page, title:s1state.title, listKey:s1state.listKey, resultKey:s1state.resultKey, fromFav:s1state.fromFav, authNext:s1state.authNext, authMethod:s1state.authMethod, otpSent:s1state.otpSent, noBack:s1state.noBack, noHome:s1state.noHome});
  s1state.noBack = false;          // 기본은 뒤로가기 표시, 진입 화면만 patch로 숨김
  s1state.noHome = false;          // 기본은 홈/메뉴 표시, 세부페이지만 patch로 숨김
  Object.assign(s1state, patch);
  renderS1();
}
function s1back(){
  const prev = s1state.history.pop();
  if(prev){ Object.assign(s1state, prev); }
  else { s1state.page='home'; }
  renderS1();
}
/* 본인인증 방법 선택 (레퍼런스: 정부24 인증방법선택 / 디자인: 영웅문 인증센터) */
function authSelect(){
  const iod = isIodFlow();
  let methods = [
    {key:'phone',   ic:'phone',  t:'휴대폰 인증',           d: iod ? '본인 명의 휴대폰으로 인증해요' : '본인 명의 휴대폰으로 인증'},
    {key:'simple',  ic:'shield', t:'간편(민간인증서) 인증',  d: iod ? '카카오·네이버·KB 등 간편인증서로 인증해요' : '카카오·네이버·KB 등 민간인증서로 인증'},
    {key:'account', ic:'wallet', t:'계좌번호 인증',          d:'본인 계좌번호·비밀번호로 인증'},
  ];
  if(iod) methods = methods.filter(m=>m.key!=='account');   // 계좌번호 찾기 단계에서는 계좌번호 인증 제외
  const head = iod ? '계좌번호를 찾아드릴게요<br>본인 인증 방법을 선택해 주세요' : '본인 인증 방법을<br>선택해주세요';
  return `<div class="auth-wrap">
    <div class="auth-head">${head}</div>
    <div class="auth-list">` + methods.map(m=>
      `<div class="auth-card" data-auth="${m.key}">
        <div class="auth-ic">${I[m.ic]}</div>
        <div class="auth-tx"><div class="at">${m.t}</div><div class="ad">${m.d}</div></div>
        <div class="auth-arw">${I.chev}</div>
      </div>`
    ).join('') + `</div>
  </div>`;
}

/* 인증 방법별 단계 화면 */
function authStep(method){
  if(method==='phone'){
    // 디자인 참고: 키움 디지털ARS '휴대폰 인증하기'
    const rows = [
      ['고객명','홍길동'], ['생년월일','1990년 01월 01일'],
      ['통신사','SKT'], ['휴대폰 번호','010-1234-5678'],
    ];
    const info = `<div class="auth-info">` + rows.map(r=>
        `<div class="ir"><span class="k">${r[0]}</span><span class="v">${r[1]}</span></div>`
      ).join('') + `</div>`;
    const iod = isIodFlow();
    const reqNote = iod ? '위 정보로 휴대폰 인증을 진행할게요.' : '위 정보로 휴대폰 본인인증을 진행합니다.';
    const tail = s1state.otpSent
      ? `<div class="auth-field" style="margin-top:20px">
          <label>인증번호</label>
          <div class="otp-row">
            <input class="auth-input" id="otpNo" type="text" inputmode="numeric" maxlength="6" autocomplete="off" placeholder="인증번호 6자리 입력">
            <span class="otp-timer" id="otpTimer">03:00</span>
          </div>
          <div class="auth-note" style="text-align:center;margin:12px 2px 0;white-space:nowrap;font-size:calc(13px*var(--scale))">인증번호를 발송했습니다. 문자를 확인해주세요.</div>
        </div>
        <div class="primary-btn" data-otpdone>인증 완료</div>`
      : `<div class="auth-note">${reqNote}</div>
        <div class="primary-btn" data-otpreq>인증 요청하기</div>`;
    // 인증 요청 후에는 '인증번호 입력' 화면처럼 헤딩을 전환(IOD 플로우)
    const head = (iod && s1state.otpSent) ? '인증번호 6자리를<br>입력해주세요' : '본인 명의 휴대폰으로<br>인증을 진행해주세요';
    return `<div class="auth-wrap">
      <div class="auth-head">${head}</div>
      ${info}
      ${tail}
    </div>`;
  }
  if(method==='simple'){
    // 레퍼런스: 정부24 민간인증서 선택 (로고는 컬러 뱃지로 대체)
    const provs = [
      {nm:'카카오톡', s:'talk', bg:'#FEE500', fg:'#3A2A00'},
      {nm:'네이버',   s:'N',    bg:'#03C75A', fg:'#fff'},
      {nm:'토스',     s:'toss', bg:'#0064FF', fg:'#fff'},
      {nm:'KB국민',   s:'KB',   bg:'#FFB300', fg:'#fff'},
      {nm:'통신사PASS',s:'PASS', bg:'#E4002B', fg:'#fff'},
      {nm:'신한인증서',s:'신한', bg:'#0046FF', fg:'#fff'},
      {nm:'NH인증서', s:'NH',   bg:'#19A85B', fg:'#fff'},
      {nm:'페이코',   s:'PAYCO',bg:'#FF1F40', fg:'#fff'},
    ];
    return `<div class="auth-wrap">
      <div class="auth-head">간편인증서를<br>선택해주세요</div>
      <div class="prov-card"><div class="prov-grid">` + provs.map(p=>
        `<div class="prov" data-simplepick="${p.nm}">
          <div class="prov-badge" style="background:${p.bg};color:${p.fg}">${p.s}</div>
          <div class="prov-nm">${p.nm}</div>
        </div>`
      ).join('') + `</div></div>
    </div>`;
  }
  // account: 계좌번호 직접 입력 + 비밀번호(터치 시 플로팅 키패드) — 휴대폰 인증 정보카드 디자인
  const iod = isIodFlow();
  const head = iod ? '어떤 계좌에서<br>입출금이 안되나요?' : '본인 명의 계좌번호와<br>비밀번호를 입력해주세요';
  const note = iod ? '인증하신 계좌의 상태를 확인해서 안내해 드려요.' : '계좌번호와 비밀번호로 본인인증을 진행합니다.';
  const acctVal = iod ? (s1state.iodAcctNo||'') : '';   // 계좌 선택 시 자동 입력된 계좌번호
  return `<div class="auth-wrap">
    <div class="auth-head">${head}</div>
    <div class="auth-info">
      <div class="ir"><span class="k">계좌번호</span>
        <input class="ir-input" id="acctNo" type="text" inputmode="numeric" autocomplete="off" placeholder="계좌번호 입력" value="${acctVal}"></div>
      <div class="ir"><span class="k">비밀번호</span>
        <div class="ir-input ir-pw" data-pwopen><span id="acctPwDisp" class="acct-dots" data-ph="비밀번호 입력 (4~8자리)">${'●'.repeat((s1state.acctPw||'').length)}</span></div></div>
    </div>
    <div class="auth-note">${note}</div>
    <div class="primary-btn" data-authdone>확인</div>
    ${iod ? `<div class="iod-findlink" data-iodfind>계좌번호를 모르겠어요 ›</div>` : ''}
  </div>`;
}

/* 일반주문 주문화면 (디자인 참고: 영웅문 간편모드 계좌조회) */
/* 종목별 시세 (현재가·등락) — 종목 돋보기 검색에서 선택 시 사용 */
const STOCK_INFO = {
  '삼성전자':           {code:'005930', cur:83200,  chg:1200,  pct:1.46,  tick:100},
  'SK하이닉스':         {code:'000660', cur:212500, chg:4500,  pct:2.16,  tick:500},
  '카카오':             {code:'035720', cur:49800,  chg:-700,  pct:-1.39, tick:50},
  '현대차':             {code:'005380', cur:228000, chg:-3000, pct:-1.30, tick:500},
  '네이버':             {code:'035420', cur:198500, chg:1500,  pct:0.76,  tick:500},
  '파이온엑스':         {code:'900250', cur:64200,  chg:2100,  pct:3.38,  tick:100},
  'LK삼양':             {code:'002170', cur:38450,  chg:320,   pct:0.84,  tick:50},
  'SP삼화':             {code:'009470', cur:12680,  chg:-140,  pct:-1.09, tick:10},
  '삼기':               {code:'122350', cur:8910,   chg:210,   pct:2.41,  tick:10},
  '삼기에너지솔루션즈': {code:'460860', cur:156000, chg:3500,  pct:2.30,  tick:500},
  '삼륭물산':           {code:'014970', cur:22300,  chg:-150,  pct:-0.67, tick:50},
  '삼립':               {code:'005610', cur:95400,  chg:900,   pct:0.95,  tick:100},
  '삼목에스폼':         {code:'018310', cur:18920,  chg:80,    pct:0.42,  tick:10},
  '삼미금속':           {code:'023960', cur:6540,   chg:-60,   pct:-0.91, tick:10}
};
function stockInfo(nm){ return STOCK_INFO[nm] || {code:'000000', cur:0, chg:0, pct:0, tick:100}; }
/* 종목 현재가 카드 (현재가 및 호가안내 · 종목 선택 시 종합주가지수 카드 대체) */
function stockQuoteCard(nm){
  const info = stockInfo(nm);
  const up = info.chg >= 0, cls = up?'up':'down', sign = up?'▲':'▼';
  const vol = ((info.cur % 9) + 1) * 100000 + (info.cur % 1000) * 100;
  const tab = s1state.priceTab || 'hoga';
  // 한줄 밑줄형 탭 (참고: 영웅문 간편모드 실시간랭킹 탭)
  const TABS = [{k:'hoga',l:'호가잔량'},{k:'5dan',l:'5단호가'},{k:'sigojo',l:'당일시고저'}];
  const tabRow = `<div class="hoga-tabs">`
    + TABS.map(x=>`<div class="hoga-tab ${x.k===tab?'on':''}" data-pricetab="${x.k}">${x.l}</div>`).join('')
    + `</div>`;
  return `<div class="idx-quote">
    <div class="qname">${nm} <span class="qcode">(${info.code||'000000'})</span></div>
    <div class="qval ${cls}">${won(info.cur)}</div>
    <div class="qchg ${cls}">${sign} ${won(Math.abs(info.chg))} (${info.pct>0?'+':''}${info.pct}%)</div>
    <div class="idx-hl">
      <div class="c"><div class="l">거래량</div><div class="n">${won(vol)}</div></div>
    </div>
    ${tabRow}
    <div class="hoga-panel">${hogaPanel(info, tab)}</div>
    <div class="ord-btnrow">
      <div class="idx-realbtn" data-arsorder="${nm}">일반주문</div>
      <div class="idx-realbtn gray" data-arspop="직원연결">직원연결</div>
    </div>
  </div>`;
}
/* 탭별 호가정보 패널 (호가잔량 / 5단호가 / 당일시고저) — 현재가·호가단위 기반 의사값 */
function hogaPanel(info, tab){
  const tick = info.tick || 100;
  const roundTick = n => Math.round(n/tick)*tick;
  const qty = i => 1000 + ((info.cur + i*131) % 9000);   // 레벨별 안정적 의사 잔량
  if(tab==='5dan'){
    let rows='';
    for(let i=5;i>=1;i--) rows += `<div class="hg-row ask"><span class="hg-lv">매도 ${i}호가</span><span class="hg-p">${won(info.cur+i*tick)}</span><span class="hg-q">${won(qty(i))}</span></div>`;
    for(let i=1;i<=5;i++) rows += `<div class="hg-row bid"><span class="hg-lv">매수 ${i}호가</span><span class="hg-p">${won(Math.max(0,info.cur-i*tick))}</span><span class="hg-q">${won(qty(i+5))}</span></div>`;
    return `<div class="hoga5">${rows}</div>`;
  }
  if(tab==='sigojo'){
    const prev = info.cur - info.chg;
    const hi = roundTick(info.cur + tick*3), lo = roundTick(Math.max(0, info.cur - tick*4)), open = roundTick(prev + tick);
    const upL = roundTick(prev*1.3), dnL = roundTick(prev*0.7);
    return `<div class="idx-hl">
        <div class="c"><div class="l">시가</div><div class="n">${won(open)}</div></div>
        <div class="c"><div class="l">기준가(전일)</div><div class="n">${won(prev)}</div></div>
      </div>
      <div class="idx-hl">
        <div class="c"><div class="l">고가</div><div class="n">${won(hi)}</div></div>
        <div class="c"><div class="l">저가</div><div class="n">${won(lo)}</div></div>
      </div>
      <div class="idx-hl">
        <div class="c"><div class="l">상한가</div><div class="n">${won(upL)}</div></div>
        <div class="c"><div class="l">하한가</div><div class="n">${won(dnL)}</div></div>
      </div>`;
  }
  // 호가잔량 (기본): 1차 매도/매수 호가 + 잔량
  const ask1 = info.cur + tick, bid1 = Math.max(0, info.cur - tick);
  return `<div class="idx-hl">
      <div class="c"><div class="l">1차 매도호가</div><div class="n">${won(ask1)}</div></div>
      <div class="c"><div class="l">매도잔량</div><div class="n">${won(qty(1))}</div></div>
    </div>
    <div class="idx-hl">
      <div class="c"><div class="l">1차 매수호가</div><div class="n">${won(bid1)}</div></div>
      <div class="c"><div class="l">매수잔량</div><div class="n">${won(qty(6))}</div></div>
    </div>`;
}
const ORDER_TYPES = ['지정가','시장가','조건부 지정가','시간외 종가','최유리지정가','최우선지정가',
  '지정가 IOC','시장가 IOC','최유리지정가 IOC','지정가 FOK','시장가 FOK','최유리지정가 FOK'];
// stock: 선택 전 null / price·qty: 선택 후에도 비워둔 채 사용자 입력 / solo: 단일 주문(탭 숨김)
const ORDER_TITLE = {buy:'현금매수', sell:'현금매도', modify:'현금정정', cancel:'현금취소'};
// 주문 버튼 명칭 (주문확인창 '주문구분'에도 동일 표기)
const ORDER_BTN = {buy:'매수 주문', sell:'매도 주문', modify:'정정하기', cancel:'취소하기'};
// 주문 타이틀별 하위 탭 (현재 미사용 — 필요 시 타이틀별 탭 정의)
const ORDER_SUBTABS = {};
const orderState = {side:'buy', type:'지정가', stock:null, price:'', qty:'', solo:false, done:'', tabs:null, tabSel:0};
function resetOrder(){ orderState.side='buy'; orderState.type='지정가'; orderState.stock=null; orderState.price=''; orderState.qty=''; orderState.solo=false; orderState.done=''; orderState.tabs=null; orderState.tabSel=0; }
function orderScreen(){
  const o = orderState;
  const s = o.stock;                                // 선택 전 null
  const TABS = [['buy','매수'],['sell','매도'],['modify','정정'],['cancel','취소']];
  const isList = (o.side==='modify' || o.side==='cancel');   // 정정/취소 → 미체결내역 표기
  // 매수/매도: 종목검색 + 현재가카드 + 주문카드 (신용 주문 페이지와 동일 디자인)
  let body;
  if(isList){
    body = `<div class="ord-body ${o.side}">${orderUnfilledList(o.side)}</div>`;
  } else {
    const stockCell = s
      ? `<span class="stk-nm">${s.nm}</span><span class="stk-x" data-ordstockclear title="종목 지우기">${I.x}</span>`
      : `<span class="ph">${o.side==='buy'?'매수':'매도'}할 종목을 검색하세요</span>`;
    const searchBar = `<div class="stk-find" data-ordsearch>${I.search}${stockCell}</div>`;
    body = searchBar + creditOrderCard(s ? s.nm : null, ORDER_BTN[o.side]);
  }
  // solo(현금매도/매수 등 단일 진입): 계좌번호 + 해당 탭 아래 내용만 표기 (탭바 숨김)
  const tabs2 = o.solo ? '' : `<div class="ord-tabs2">` + TABS.map(([k,lb])=>
      `<div class="ot2 ${k} ${o.side===k?'on':''}" data-ordside="${k}">${lb}</div>`).join('') + `</div>`;
  // 주문 완료 메시지 + 4개 버튼 (신용 주문 페이지와 동일)
  const sideNm = o.side==='buy' ? '매수' : '매도';
  const doneMsg = (!isList && o.done)
    ? `<div class="ord-done ${o.side}" style="margin:2px 0 0">주문번호 ${o.done}번으로 주문이 완료되었습니다.</div>
       <div class="ord-acts row" style="margin:9px 0 0">
         <div class="ord-act" data-orderagain>추가${sideNm}</div>
         <div class="ord-act" data-ordfilled>체결내역</div>
         <div class="ord-act" data-ordacct>다른계좌주문</div>
         <div class="ord-act" data-arspop="직원연결">직원연결</div>
       </div>` : '';
  // 타이틀 아래 한 줄 하위 탭 (예: 신용매도 = 자기융자 매도상환/대출 매도상환/대주 매도)
  const subTabs = (o.tabs && o.tabs.length) ? `<div class="cat-tabs ord-subtabs">` + o.tabs.map((tb,i)=>
      `<div class="cat-tab ${i===o.tabSel?'on':''}" data-credittab="${i}">${tb}</div>`).join('') + `</div>` : '';
  return `${subTabs}<div class="ord-wrap">
    ${tabs2}
    ${body}
    ${doneMsg}
  </div>`;
}
/* 정정/취소 탭: 미체결 주문 목록 */
const UNFILLED = [
  {n:'삼성전자', s:'매수', q:5, p:82000, t:'09:30'},
  {n:'카카오', s:'매도', q:10, p:51000, t:'10:15'},
  {n:'NAVER', s:'매수', q:2, p:198500, t:'11:02'},
];
function orderUnfilledList(side){
  const act = side==='modify' ? '정정' : '취소';
  const msg = side==='modify' ? '정정 화면으로 이동합니다' : '주문을 취소했습니다';
  return `<div class="ord-unlist">` + UNFILLED.map(x=>`
    <div class="unrow">
      <div class="untx">
        <div class="unnm">${x.n} <span class="tag ${x.s==='매수'?'live':'done'}">${x.s}</span></div>
        <div class="und">${x.q}주 · ${won(x.p)}원 · ${x.t} 주문 · 미체결</div>
      </div>
      <span class="mini-btn ${side==='cancel'?'warn':''}" data-flash="${x.n} ${msg}. (시연용)">${act}</span>
    </div>`).join('') + `</div>`;
}

/* 주문가격·수량 직접 입력 (총액 실시간 갱신) */
function orderPriceInput(v){ orderState.price = String(v).replace(/[^0-9]/g,''); orderUpdateTotal(); }
function orderQtyInput(v){ orderState.qty = String(v).replace(/[^0-9]/g,''); orderUpdateTotal(); }
function orderUpdateTotal(){
  const el = document.getElementById('ordTotal'); if(!el) return;
  const o = orderState, s = o.stock;
  const isMarket = o.type.startsWith('시장가') || o.type==='시간외 종가';
  const eff = isMarket ? (s ? s.cur : 0) : (parseInt(o.price,10) || 0);
  el.textContent = won(eff * (parseInt(o.qty,10) || 0)) + '원';
}

/* 신용 주문 카드 (현재가 헤더 + 주문유형/가격/수량/총액 + 주문 버튼) — orderState 사용
   매수/매도는 orderState.side, 버튼 라벨은 화면 타이틀(s1state.title) 사용 */
function creditOrderCard(nm, btnLabel){
  const o = orderState;
  const info = nm ? stockInfo(nm) : null;   // 종목 미선택 시에도 주문 카드는 표기
  const isMarket = o.type.startsWith('시장가') || o.type==='시간외 종가';
  const priceNum = parseInt(o.price,10)||0, qtyNum = parseInt(o.qty,10)||0;
  const eff = isMarket ? (info ? info.cur : 0) : priceNum;
  const total = eff * qtyNum;
  const isSell = o.side==='sell';
  const sideCls = isSell ? 'sell' : 'buy';
  const totCls = isSell ? 'txt-down' : 'txt-up';
  const actLabel = btnLabel || s1state.title || (isSell ? '자기융자 매도상환' : '자기융자매수');
  // 현재가 카드: 종목 선택 시에만 표시 / 주문 카드: 항상 표시 (각각 흰색)
  let priceCard = '';
  if(info){
    const up = info.chg>=0, qcls = up?'up':'down', sign = up?'▲':'▼';
    priceCard = `<div class="idx-quote">
      <div class="qname">${nm} <span class="qcode">(${info.code})</span></div>
      <div class="qval ${qcls}">${won(info.cur)}</div>
      <div class="qchg ${qcls}">${sign} ${won(Math.abs(info.chg))} (${info.pct>0?'+':''}${info.pct}%)</div>
    </div>`;
  }
  const orderCard = `<div class="idx-quote ${sideCls}">
    <div class="ord-fields">
      <div class="ord-field">
        <div class="ofl">주문유형</div>
        <div class="ortsel" data-ordtypesel>${o.type} ${I.down}</div>
      </div>
      <div class="ord-field">
        <div class="ofl">주문가격</div>
        ${isMarket
          ? `<div class="ord-inwrap off"><span class="ord-mkt">시장가</span></div>`
          : `<div class="ord-inwrap"><input class="ord-input" type="text" inputmode="numeric" value="${o.price}" placeholder="가격 입력" oninput="orderPriceInput(this.value)"><span class="ord-unit">원</span></div>`}
      </div>
      <div class="ord-field">
        <div class="ofl">주문수량</div>
        <div class="ord-inwrap"><input class="ord-input" type="text" inputmode="numeric" value="${o.qty}" placeholder="수량 입력" oninput="orderQtyInput(this.value)"><span class="ord-unit">주</span></div>
      </div>
      <div class="ord-sum ${sideCls}">
        <div class="osr tot"><span>주문 총액</span><b id="ordTotal" class="${totCls}">${won(total)}원</b></div>
      </div>
    </div>
    <div class="idx-realbtn ${sideCls}" data-ordsubmit>${actLabel}</div>
  </div>`;
  return priceCard + orderCard;
}

/* 주문 확인 바텀시트 (영웅문 주문확인창 참고) — 매도는 [매도]·매도색 */
function showOrderConfirm(){
  closeOrdConfirm();
  const o = orderState, s = o.stock;
  const M = {buy:'매수', sell:'매도', modify:'정정', cancel:'취소'};
  // 주문구분: 주문 버튼 명칭 그대로 (신용주문은 화면 타이틀, 그 외는 ORDER_BTN)
  const isCredit = (s1state.page==='creditbuy' || s1state.page==='creditsell');
  const btnLabel = isCredit ? (s1state.title || M[o.side]) : (ORDER_BTN[o.side] || M[o.side]);
  const isMarket = o.type.startsWith('시장가') || o.type==='시간외 종가';
  const priceNum = parseInt(o.price,10)||0, qtyNum = parseInt(o.qty,10)||0;
  const eff = isMarket ? (s ? s.cur : 0) : priceNum;
  const screen = document.getElementById('screen'); if(!screen) return;
  const el = document.createElement('div');
  el.className = 'ordc-ov'; el.id = 'ordConfirm';
  el.innerHTML = `<div class="ordc-sheet">
    <div class="ordc-title">이렇게 주문할게요</div>
    <div class="ordc-list">
      <div class="ocr"><span class="k">종목명</span><span class="v">${s ? s.nm : '-'}</span></div>
      <div class="ocr"><span class="k">주문구분</span><span class="v ${o.side}">${btnLabel}</span></div>
      <div class="ocr"><span class="k">주문유형</span><span class="v">${o.type}</span></div>
      <div class="ocr"><span class="k">주문수량</span><span class="v">${won(qtyNum)}주</span></div>
      <div class="ocr"><span class="k">주문가격</span><span class="v ${o.side}">${isMarket ? '시장가' : won(priceNum)+'원'}</span></div>
      <div class="ocr"><span class="k">총 주문금액</span><span class="v">${won(eff*qtyNum)}원</span></div>
    </div>
    <div class="ordc-btns">
      <button class="ordc-btn cancel" data-ordcancel>취소</button>
      <button class="ordc-btn ok ${o.side}" data-ordconfirm>확인</button>
    </div>
  </div>`;
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}
function closeOrdConfirm(){ const m=document.getElementById('ordConfirm'); if(m){ m.classList.remove('on'); setTimeout(()=>{ if(m.parentNode) m.remove(); },240); } }

/* 계좌 선택 (영웅문 계좌선택 플로팅 참고) */
const ACCOUNTS = [
  {nm:'홍길동', no:'5257-5602', type:'위탁종합'},
  {nm:'홍길동', no:'6320-3614', type:'위탁종합'},
  {nm:'홍길동', no:'6320-7376', type:'중개형ISA'},
];
let selAcct = 0;
let authAcct = {type:ACCOUNTS[0].type, no:ACCOUNTS[0].no};  // 본인인증 시 사용한 계좌(거래내역 표시용)
let pwCtx = '';                                             // 키패드 용도: ''(인증) / 'change'(계좌변경)
let pendingAcct = -1;                                       // 계좌변경 시 비번 확인 대기 중인 계좌
function acctLineHTML(){ const a=ACCOUNTS[selAcct]; return `${a.type} ${a.no} ${I.down}`; }
function openAcctSheet(){
  closeAcctSheet();
  const screen=document.getElementById('screen'); if(!screen) return;
  const el=document.createElement('div'); el.className='tx-ov acct'; el.id='acctSheet';
  el.innerHTML=`<div class="ps-sheet">
    <div class="ps-top"><div class="ps-title">계좌를 선택하세요</div><div class="ps-x" data-acctclose>✕</div></div>
    <div class="acct-list">` + ACCOUNTS.map((a,i)=>`
      <div class="acct-row ${i===selAcct?'on':''}" data-acctpick="${i}">
        <div class="acct-tx"><div class="acct-nm">${a.nm}</div><div class="acct-no">${a.no} [${a.type}]</div></div>
        ${i===selAcct?`<div class="acct-ck">${I.check}</div>`:''}
      </div>`).join('') + `</div>
  </div>`;
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}
function closeAcctSheet(){ const el=document.getElementById('acctSheet'); if(el){ el.classList.remove('on'); setTimeout(()=>{ if(el.parentNode) el.remove(); },200); } }

/* ===== 증명서 발급 폼 드롭다운 (옵션 선택 바텀시트) ===== */
const CERT_OPTS = {
  certDate:   {t:'기준일자',  opts:['2026.06.29'], cal:true},          // 달력(단일)
  certUse:    {t:'제출 용도', opts:['은행 제출용','관공서 제출용','법원 제출용','회사 제출용','기타']},
  certCopies: {t:'발급 통수', opts:['1통','2통','3통','5통']},
  certPeriod: {t:'조회 기간', opts:['2026.06.01 ~ 2026.06.29'], cal:true}, // 달력(범위)
  certTxType: {t:'거래 구분', opts:['전체 거래','매수/매도','입출금','배당/이자']},
  certFormat: {t:'파일 형식', opts:['PDF','Excel','종이(우편)']},
  certUseDep: {t:'제출 용도', opts:['비자·유학용','은행 제출용','관공서 제출용','기타']},
  certLang:   {t:'발급 언어', opts:['국문','영문','국·영문 병기']},
  certTaxYear:{t:'과세 연도', opts:['2025년','2024년','2023년','2022년']},
};
const certSel = {};   // 선택값 저장(없으면 첫 옵션이 기본값)
function certVal(key){ return certSel[key] || CERT_OPTS[key].opts[0]; }
// 폼 필드 1줄(라벨+선택값+꺾쇠) — data-certsel 로 시트 오픈
function certField(key){
  return `<div class="field"><div class="fl">${CERT_OPTS[key].t}</div>
    <div class="fi" data-certsel="${key}" style="cursor:pointer">${certVal(key)} ${I.down}</div></div>`;
}
function openCertSheet(key){
  closeCertSheet();
  const o = CERT_OPTS[key]; if(!o) return;
  const screen=document.getElementById('screen'); if(!screen) return;
  const cur = certVal(key);
  const el=document.createElement('div'); el.className='tx-ov'; el.id='certSheet'; el.dataset.certkey=key;
  el.innerHTML=`<div class="ps-sheet">
    <div class="ps-top"><div class="ps-title">${o.t}</div><div class="ps-x" data-certclose>✕</div></div>
    <div class="acct-list">` + o.opts.map(v=>`
      <div class="acct-row ${v===cur?'on':''}" data-certpick="${v}">
        <div class="acct-tx"><div class="acct-nm">${v}</div></div>
        ${v===cur?`<div class="acct-ck">${I.check}</div>`:''}
      </div>`).join('') + `</div>
  </div>`;
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}
function closeCertSheet(){ const el=document.getElementById('certSheet'); if(el){ el.classList.remove('on'); setTimeout(()=>{ if(el.parentNode) el.remove(); },200); } }

/* ===== 달력 피커 (기준일자=단일 / 기간=범위 선택) ===== */
const CAL_WK = ['일','월','화','수','목','금','토'];
let calState = {y:2026, m:6, mode:'single', target:'certDate', single:null, start:null, end:null};
const ymd = s => { const m=String(s).match(/(\d{4})\.(\d{1,2})\.(\d{1,2})/); return m? {y:+m[1],m:+m[2],d:+m[3]} : null; };
const ymdF = d => `${d.y}.${pad2(d.m)}.${pad2(d.d)}`;
const ymdCmp = (a,b) => a.y!==b.y ? a.y-b.y : a.m!==b.m ? a.m-b.m : a.d-b.d;
const ymdEq = (a,b) => !!a && !!b && a.y===b.y && a.m===b.m && a.d===b.d;
function calGridHTML(){
  const y=calState.y, m=calState.m;
  const first = new Date(y, m-1, 1).getDay();          // 1일의 요일(0=일)
  const dim   = new Date(y, m, 0).getDate();           // 해당 월 일수
  let cells='';
  for(let i=0;i<first;i++) cells += `<div class="cal-day muted"></div>`;
  for(let d=1; d<=dim; d++){
    const cur={y,m,d};
    let cls='';
    if(calState.mode==='single'){
      if(ymdEq(cur, calState.single)) cls='on';
    } else {
      const s=calState.start, e=calState.end;
      if(ymdEq(cur,s)||ymdEq(cur,e)) cls='on';
      else if(s&&e&&ymdCmp(cur,s)>0&&ymdCmp(cur,e)<0) cls='inrange';
    }
    cells += `<div class="cal-day ${cls}" data-calday="${d}">${d}</div>`;
  }
  return cells;
}
function calSheetHTML(){
  const title = calState.mode==='range' ? '기간을 선택하세요' : '기준일자를 선택하세요';
  const sub = calState.mode==='range'
    ? `${calState.start?ymdF(calState.start):'시작일'} ~ ${calState.end?ymdF(calState.end):'종료일'}`
    : (calState.single?ymdF(calState.single):'날짜 선택');
  return `<div class="ps-sheet">
    <div class="ps-top"><div class="ps-title">${title}</div><div class="ps-x" data-calclose>✕</div></div>
    <div class="cal-head">
      <div class="cal-nav" data-calmove="-1">‹</div>
      <div class="cal-ym">${calState.y}년 ${calState.m}월</div>
      <div class="cal-nav" data-calmove="1">›</div>
    </div>
    <div class="cal-wk">${CAL_WK.map((w,i)=>`<div class="cw ${i===0?'sun':i===6?'sat':''}">${w}</div>`).join('')}</div>
    <div class="cal-grid">${calGridHTML()}</div>
    <div class="cal-range">${sub}</div>
    <div class="primary-btn" data-calapply>선택</div>
  </div>`;
}
function calRefresh(){ const el=document.getElementById('calSheet'); if(el) el.innerHTML=calSheetHTML(); }
function openCalendar(target){
  closeCalendar();
  const screen=document.getElementById('screen'); if(!screen) return;
  calState.target = target;
  if(target==='certPeriod'){
    calState.mode='range';
    const ms = (certVal('certPeriod').match(/(\d{4})\.(\d{1,2})\.(\d{1,2})/g)||[]).map(ymd);
    calState.start = ms[0] || {y:2026,m:6,d:1};
    calState.end   = ms[1] || {y:2026,m:6,d:29};
    calState.y=calState.end.y; calState.m=calState.end.m;
  } else {
    calState.mode='single';
    calState.single = ymd(certVal('certDate')) || {y:2026,m:6,d:29};
    calState.y=calState.single.y; calState.m=calState.single.m;
  }
  const el=document.createElement('div'); el.className='tx-ov'; el.id='calSheet';
  el.innerHTML=calSheetHTML();
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}
function closeCalendar(){ const el=document.getElementById('calSheet'); if(el){ el.classList.remove('on'); setTimeout(()=>{ if(el.parentNode) el.remove(); },200); } }
function calPickDay(d){
  const day={y:calState.y, m:calState.m, d};
  if(calState.mode==='single'){ calState.single=day; }
  else {
    if(!calState.start || calState.end){ calState.start=day; calState.end=null; }   // 새 범위 시작
    else if(ymdCmp(day, calState.start)<0){ calState.end=calState.start; calState.start=day; }
    else calState.end=day;
  }
  calRefresh();
}
function calApply(){
  if(calState.mode==='single'){ certSel.certDate = ymdF(calState.single); }
  else { if(!calState.end) calState.end=calState.start; certSel.certPeriod = `${ymdF(calState.start)} ~ ${ymdF(calState.end)}`; }
  closeCalendar(); renderS1();
}

/* 계좌 비밀번호 플로팅 키패드 (디자인 참고: 영웅문 계좌비밀번호) */
function openPwKeypad(showAcct, ctx){
  pwCtx = ctx || '';
  closePwKeypad();
  const screen = document.getElementById('screen');
  if(!screen) return;
  const digits = ['1','2','3','4','5','6','7','8','9'];
  const el = document.createElement('div');
  el.className = 'kp-ov'; el.id = 'pwKeypad';
  el.innerHTML = `<div class="kp-sheet">
    <div class="kp-grab"></div>
    <div class="kp-top">
      <div class="kp-title">계좌 비밀번호 입력</div>
      <div class="kp-toggle"><span>ABC</span><span class="on">123</span></div>
    </div>
    ${showAcct ? `<div class="kp-acct" data-acctsel>${acctLineHTML()}</div>` : ''}
    <div class="kp-pw"><span id="kpDots" class="acct-dots" data-ph="계좌 비밀번호(4자리~8자리)">${'●'.repeat((s1state.acctPw||'').length)}</span></div>
    <div class="keypad">` + digits.map(k=>`<div class="key" data-key="${k}">${k}</div>`).join('')
      + `<div class="key blank"></div><div class="key" data-key="0">0</div><div class="key blank"></div></div>
    <div class="kp-actions">
      <div class="kp-akey back" data-key="back">⌫</div>
      <div class="kp-akey cancel" data-kpcancel>취소</div>
      <div class="kp-akey done" data-kpconfirm>입력완료</div>
    </div>
  </div>`;
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}
function closePwKeypad(){
  const el = document.getElementById('pwKeypad');
  if(el){ el.classList.remove('on'); setTimeout(()=>{ if(el.parentNode) el.remove(); }, 220); }
}

/* ===== 영웅문S# 앱 연결 팝업 (계좌정보 연동 + 해당 화면 바로연동) ===== */
const APP_LINK = {
  cdd: {title:'고객확인(CDD/EDD) 정보 등록·갱신'},
  iodpurpose: {title:'금융거래목적확인서 등록'},
};
function openAppLink(key){
  closeAppLink();
  const screen = document.getElementById('screen'); if(!screen) return;
  const c = APP_LINK[key] || {title:'요청하신 업무'};
  const el = document.createElement('div');
  el.className = 'app-pop-ov'; el.id = 'appPop'; el.dataset.linkTitle = c.title;
  el.innerHTML = `<div class="app-pop">
    <div class="ap-logo">S#</div>
    <div class="ap-title">영웅문S#으로 연결</div>
    <div class="ap-desc">계좌정보를 안전하게 연동하고<br><b>${c.title}</b> 화면으로 바로 이동합니다.</div>
    <div class="ap-flow"><span class="ap-step">앱 실행</span><span class="ap-arr">›</span><span class="ap-step">계좌 연동</span><span class="ap-arr">›</span><span class="ap-step">화면 이동</span></div>
    <div class="ap-btns">
      <div class="ap-btn cancel" data-appcancel>취소</div>
      <div class="ap-btn go" data-appgo>영웅문S# 열기</div>
    </div>
  </div>`;
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}
function closeAppLink(){
  const el = document.getElementById('appPop');
  if(el){ el.classList.remove('on'); setTimeout(()=>{ if(el.parentNode) el.remove(); }, 220); }
}

/* ===== Ver 4.0 · 상담연결 안내 팝업 (최종메뉴 클릭 시) =====
   헤더=후보1 / 채널 라벨·배지=B 추천 / 설명=세부문구 변형.
   업무에 따라 제공 채널 개수가 달라질 수 있음 — 우선 5종 모두 노출.
   desc가 함수면 상황(계좌 연동 여부 등)에 따라 문구 분기. */
/* 상담팝업 채널 아이콘 — FAQ 배너와 동일한 '컬러 채움형' 스타일(2톤). 투명 배경 위 풀컬러.
   영웅문S#은 실제 앱 아이콘(assets/ys-icon.png) 사용. */
const CS_ICON = {
  // 챗봇: 파란 말풍선 + 흰 점 3개
  chat:'<svg viewBox="0 0 24 24" fill="none"><path d="M4 6A2.5 2.5 0 0 1 6.5 3.5h11A2.5 2.5 0 0 1 20 6v6.5a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.3A1 1 0 0 1 4 17.5V6z" fill="#3b82f6"/><circle cx="9" cy="9.3" r="1.35" fill="#fff"/><circle cx="12.5" cy="9.3" r="1.35" fill="#dbeafe"/><circle cx="16" cy="9.3" r="1.35" fill="#fff"/></svg>',
  // 음성ARS: 초록 수화기 + 연초록 음파
  voice:'<svg viewBox="0 0 24 24" fill="none"><path d="M6.7 11.9c1.4 2.8 3.7 5.1 6.5 6.5l2-2c.3-.3.7-.4 1.1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .5 1 1v3.2c0 .6-.4 1-1 1C10.4 22.9 3.1 15.6 3.1 6.7c0-.6.5-1 1-1h3.2c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-1.9 1.6z" fill="#E6007F"/><path d="M14.6 3.1a6.6 6.6 0 0 1 5.7 5.7" stroke="#F6A9D4" stroke-width="1.8" stroke-linecap="round"/><path d="M14.1 6.4a3.4 3.4 0 0 1 2.8 2.8" stroke="#F6A9D4" stroke-width="1.8" stroke-linecap="round"/></svg>',
  // 전화상담: 주황 헤드셋(헤드밴드+이어컵) + 마이크
  call:'<svg viewBox="0 0 24 24" fill="none"><path d="M4.5 13v-1.5a7.5 7.5 0 0 1 15 0V13" stroke="#14183C" stroke-width="2.2" stroke-linecap="round"/><rect x="3" y="12.3" width="4.4" height="7" rx="2.2" fill="#14183C"/><rect x="16.6" y="12.3" width="4.4" height="7" rx="2.2" fill="#14183C"/><path d="M19 19.3v.4a3.3 3.3 0 0 1-3.3 3.3H13.5" stroke="#14183C" stroke-width="2.1" stroke-linecap="round"/><circle cx="12.6" cy="23" r="1.5" fill="#9aa0c0"/></svg>',
  // 디지털ARS(웹): 보라 모니터 + 밝은 화면
  web:'<svg viewBox="0 0 24 24" fill="none"><rect x="2.5" y="4.5" width="19" height="12" rx="2.5" fill="#7c5cff"/><rect x="5" y="7" width="14" height="7.2" rx="1" fill="#d6ccff"/><path d="M9 20h6M12 16.5V20" stroke="#7c5cff" stroke-width="2" stroke-linecap="round"/></svg>',
};
const CONSULT_CHANNELS = [
  { k:'hero', nm:'영웅문S#으로 이어보기', ic:'<img src="assets/ys-icon.png" alt="영웅문S#">',
    badges:[{t:'앱 연동',cls:'navy'},{t:'바로 이동',cls:'mag'}],
    // 입력한 계좌정보(세션 인증) 있으면 연동 문구, 없으면 앱 이동 문구
    desc(){ return sessionAuthed
      ? '입력하신 계좌로 연결해 바로 이 화면을 띄워드려요'
      : '앱을 열어 원하시는 업무 화면으로 이동해요'; } },
  { k:'chat', nm:'AI 챗봇에게 물어보기', ic:CS_ICON.chat,
    badges:[{t:'24시간',cls:'navy'},{t:'대기 없음',cls:'mag'}],
    desc:'기다림 없이 지금 바로 물어보세요' },
  { k:'voice', nm:'음성 ARS로 안내받기', ic:CS_ICON.voice,
    badges:[{t:'음성 안내',cls:'gray'}],
    desc:'선택하신 업무에 맞춰 순서대로 알려드려요' },
  { k:'call', nm:'상담원과 통화하기', ic:CS_ICON.call,
    badges:[{t:'담당부서 연결',cls:'gray'},{t:'대기 있음',cls:'warn'}],
    desc:'담당 상담원과 직접 통화해요 · 연결까지 잠시 걸릴 수 있어요' },
  { k:'digital', nm:'디지털 ARS로 처리하기', ic:CS_ICON.web, soon:true,
    badges:[{t:'준비중 · 27년 2월',cls:'gray'}],
    desc:'곧 만나요! 2027년 2월부터 이 화면에서 바로 처리할 수 있어요' },
];
function openConsult(label, opts){
  opts = opts || {};
  const exclude = opts.exclude || [];   // 제외할 채널 키 (예: 직원연결 최종메뉴는 'voice' 제외)
  const prev = document.getElementById('consultPop'); if(prev) prev.remove();   // 기존 팝업 즉시 제거(중복 id 방지)
  const screen = document.getElementById('screen'); if(!screen) return;
  const el = document.createElement('div');
  el.className = 'consult-ov'; el.id = 'consultPop'; el.dataset.csLabel = label || '';
  const rows = CONSULT_CHANNELS.filter(c=>!exclude.includes(c.k)).map(c=>{
    const badges = (c.badges||[]).map(b=>`<span class="cs-badge ${b.cls}">${b.t}</span>`).join('');
    const desc = (typeof c.desc==='function') ? c.desc() : (c.desc||'');
    return `<div class="cs-row${c.soon?' soon':''}" data-cschannel="${c.k}">
      <div class="cs-ic">${c.ic}</div>
      <div class="cs-body">
        <div class="cs-nm">${c.nm}</div>
        <div class="cs-badges">${badges}</div>
        <div class="cs-desc">${desc}</div>
      </div>
      <div class="cs-arw">${I.chev}</div>
    </div>`;
  }).join('');
  el.innerHTML = `<div class="consult-sheet">
    <div class="cs-grip"></div>
    <div class="cs-head">
      <div class="cs-title">어떻게 도와드릴까요?</div>
      <div class="cs-sub">편하신 방법으로 상담을 연결해 드려요</div>
      ${label?`<div class="cs-ctx">선택하신 업무 · <b>${label}</b></div>`:''}
    </div>
    <div class="cs-list">${rows}</div>
    <div class="cs-cancel" data-csclose>닫기</div>
  </div>`;
  screen.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
}
function closeConsult(){
  const el = document.getElementById('consultPop');
  if(el){ el.classList.remove('on'); setTimeout(()=>{ if(el.parentNode) el.remove(); }, 240); }
}

/* ===== Ver 4.0 · '입출금이 안돼요' 업무 플로우 =====
   계좌 인증(계좌번호/휴대폰/간편 — 기존 auth 재사용) → 상태 확인(로딩) → 결과(3가지 사유 토글).
   인증 완료 라우팅은 authNext.go==='iodcheck' 로 식별(gotoAuthNext에서 startIodCheck 호출). */
function isIodFlow(){ return (s1state.authNext||{}).go==='iodcheck'; }   // 계좌인증 화면의 '계좌번호 모름' 링크·스텝바 노출 게이트
const IOD_STEPS = ['계좌 인증','상태 확인','결과 안내'];
const IOD_RESULTS = {
  multi: {
    tab:'단기 다수계좌', badge:'출금 제한', badgeCls:'stop',
    title:'지금은 출금이 제한된 계좌예요',
    body:'최근 짧은 기간에 여러 계좌를 만드셔서, 안전을 위해 출금이 잠시 막혀 있어요.',
    release:'<b>금융거래목적확인서</b>를 등록하시면 바로 풀려요.',
    actions:[{t:'영웅문S#에서 등록하기', kind:'app'},{t:'디지털 ARS로 등록하기', kind:'purpose'}],
  },
  dormant: {
    tab:'장기 미사용', badge:'거래중지 · 출금 제한', badgeCls:'stop',
    title:'오래 쉬어서 거래가 중지된 계좌예요',
    body:'안전을 위해 출금이 제한돼 있어요.',
    release:'<b>금융거래목적확인서</b>를 등록하시면 즉시 해제돼요.',
    actions:[{t:'영웅문S#에서 등록하기', kind:'app'},{t:'디지털 ARS로 등록하기', kind:'purpose'}],
  },
  limit: {
    tab:'한도 제한', badge:'한도 제한', badgeCls:'warn',
    title:'한도제한계좌예요',
    body:'지금은 하루 <b>100만 원까지</b> 출금할 수 있어요.',
    release:'한도를 풀려면 추가 서류 확인이 필요해요.',
    actions:[{t:'영웅문S#에서 해제하기', kind:'app'},{t:'상담원 연결', kind:'consult'}],
  },
};
function startIodCheck(){
  // 인증 완료 → 상태 확인(로딩) → 1.8초 후 결과. 로딩/결과에서 뒤로가기는 홈으로.
  s1state.iodResult = 'multi';
  s1nav({page:'iodcheck', title:'계좌 상태 확인', noBack:true, noHome:true, fromFav:false});
  s1state.history = [];
  setTimeout(()=>{
    if(s1state.page!=='iodcheck') return;   // 사용자가 이탈했으면 중단
    s1state.page='iodresult'; s1state.title='계좌 상태';
    s1state.noBack=false; s1state.noHome=true;
    renderS1();
  }, 1800);
}
function renderIodChecking(){
  return pageTop(s1state.title||'계좌 상태 확인')
    + untactSteps(IOD_STEPS, 1)
    + `<div class="iod-loading">
        <div class="iod-spinwrap"><div class="iod-spinner"></div><div class="iod-scan">${I.search||''}</div></div>
        <div class="iod-load-t">계좌 상태를 확인하고 있어요</div>
        <div class="iod-load-d">잠시만 기다려 주세요</div>
      </div>`;
}
function renderIodResult(){
  const key = IOD_RESULTS[s1state.iodResult] ? s1state.iodResult : 'multi';
  const r = IOD_RESULTS[key];
  const acct = (authAcct && authAcct.no) ? `${authAcct.type||'종합위탁'} ${authAcct.no}` : '종합위탁 123-45-678901';
  const toggles = Object.keys(IOD_RESULTS).map(k=>
    `<div class="iod-tg ${k===key?'on':''}" data-iodres="${k}">${IOD_RESULTS[k].tab}</div>`).join('');
  const actBtns = r.actions.map(a=>{
    if(a.kind==='app')     return `<div class="primary-btn" data-applink="iodpurpose">${a.t}</div>`;
    if(a.kind==='purpose') return `<div class="primary-btn ghost" data-s1go="result" data-rk="purpose" data-fk="금융거래목적확인서">${a.t}</div>`;
    if(a.kind==='consult') return `<div class="primary-btn ghost" data-arspop="한도제한계좌 해제">${a.t}</div>`;
    return '';
  }).join('');
  return pageTop(s1state.title||'계좌 상태')
    + untactSteps(IOD_STEPS, 2)
    + `<div class="iod-toggles">${toggles}</div>`
    + `<div class="iod-card">
        <div class="iod-acct">${acct}</div>
        <span class="iod-badge ${r.badgeCls}">${r.badge}</span>
        <div class="iod-title">${r.title}</div>
        <div class="iod-body">${r.body}</div>
        <div class="iod-release">${r.release}</div>
      </div>`
    + `<div class="iod-actions">${actBtns}</div>`
    + `<div class="iod-note">※ 데모 화면이에요. 위 버튼으로 계좌 상태(사유)를 바꿔볼 수 있어요.</div>`;
}
/* 휴대폰·간편 인증 완료 → 본인 명의 계좌 선택(선택 시 계좌 인증 화면에 계좌번호 자동 입력) */
function renderIodAcctSel(){
  const rows = ACCOUNTS.map((a,i)=>
    `<div class="iodsel-row" data-iodacct="${i}">
      <div class="iodsel-ic">${I.wallet}</div>
      <div class="iodsel-tx"><div class="iodsel-nm">${a.type}</div><div class="iodsel-no">${a.no}</div></div>
      <div class="iodsel-arw">${I.chev}</div>
    </div>`).join('');
  return pageTop(s1state.title||'계좌 선택')
    + untactSteps(IOD_STEPS, 0)
    + `<div class="auth-wrap">
        <div class="auth-head">인증된 명의로<br>계좌를 찾았어요</div>
        <div class="iodsel-guide">입출금을 확인할 계좌를 선택해 주세요</div>
        <div class="iodsel-list">${rows}</div>
      </div>`;
}

/* ===== 간편비밀번호(PIN) 변경 — 2단계 입력(새 PIN → 확인) ===== */
let pinState = {buf:'', stage:'new', first:''};
function pinReset(){ pinState = {buf:'', stage:'new', first:''}; }
// 사용 불가 규칙: 동일 숫자(111111)·연속 숫자(123456/654321)·생년월일(900101)
function pinInvalidReason(p){
  if(/^(\d)\1{5}$/.test(p)) return '동일한 숫자는 사용할 수 없습니다.';
  let asc=true, desc=true;
  for(let i=1;i<p.length;i++){
    if(+p[i] !== +p[i-1]+1) asc=false;
    if(+p[i] !== +p[i-1]-1) desc=false;
  }
  if(asc||desc) return '연속된 숫자는 사용할 수 없습니다.';
  if(p==='900101') return '생년월일은 사용할 수 없습니다.';
  return '';
}
function pinUpdateDots(){
  const dots = document.querySelectorAll('#pinDots span');
  dots.forEach((d,i)=> d.classList.toggle('on', i < pinState.buf.length));
}
function pinSetGuide(html){
  const g = document.getElementById('pinGuide');
  if(g) g.innerHTML = html;
}
function pinPress(val){
  if(val==='back'){ pinState.buf = pinState.buf.slice(0,-1); pinUpdateDots(); return; }
  if(pinState.buf.length >= 6) return;
  pinState.buf += String(val);
  pinUpdateDots();
  if(pinState.buf.length === 6) setTimeout(pinProcess, 140);  // 6번째 점 표시 후 처리
}
function pinProcess(){
  const p = pinState.buf;
  if(pinState.stage === 'new'){
    const bad = pinInvalidReason(p);
    if(bad){ flash(bad); pinState.buf=''; pinUpdateDots(); return; }
    pinState.first = p; pinState.stage = 'confirm'; pinState.buf=''; pinUpdateDots();
    pinSetGuide('확인을 위해<br>새 PIN을 다시 입력해 주세요');
    return;
  }
  // confirm 단계
  if(p === pinState.first){
    flash('간편비밀번호(PIN)가 변경되었습니다. 다음 로그인부터 새 PIN을 사용해 주세요. (시연용)');
    pinReset();
    s1back();   // ID조회/PW초기화 메뉴로 복귀
  } else {
    flash('PIN이 일치하지 않습니다. 처음부터 다시 입력해 주세요.');
    pinState = {buf:'', stage:'new', first:''};
    pinUpdateDots();
    pinSetGuide('새로운 간편비밀번호<br>6자리를 입력해 주세요');
  }
}

/* 인증번호 카운트다운 (3:00 → 0:00) */
let otpTimer = null;
function startOtpTimer(sec){
  clearInterval(otpTimer);
  let t = sec;
  const paint = ()=>{
    const el = document.getElementById('otpTimer');
    if(!el){ clearInterval(otpTimer); return; }   // 화면 이탈 시 자동 정리
    const m = String(Math.floor(t/60)).padStart(2,'0');
    const s = String(t%60).padStart(2,'0');
    el.textContent = `${m}:${s}`;
    if(t<=0){ clearInterval(otpTimer); el.classList.add('done'); }
  };
  paint();
  otpTimer = setInterval(()=>{ t--; paint(); }, 1000);
}

/* 인증 완료 후 원래 자주 찾는 서비스 목적지로 이동 */
function gotoAuthNext(deep){
  sessionAuthed = true;            // 이후 다른 자주 찾는 서비스는 추가 인증 생략
  const d = s1state.authNext || {};
  const fk = d.fk || '';
  s1state.acctPw = '';
  // 입출금 안내 플로우: 인증 완료 → 계좌 상태 확인(로딩) → 결과
  if(d.go==='iodcheck'){ startIodCheck(); return; }
  // 보이는 ARS 일반주문 → 주문화면 / 그 외 대메뉴 → 중메뉴 리스트
  if(d.go==='order'){ resetOrder();
    if(d.stock){ const info = stockInfo(d.stock); orderState.stock = {nm:d.stock, cur:info.cur, chg:info.chg, pct:info.pct, tick:info.tick}; }
    s1nav({page:'order', title:'일반주문'}); return; }
  // 다른계좌주문: 인증 후 클릭했던 주문화면으로 복귀 (종목 초기화)
  if(d.go==='reorder'){ resetOrder(); orderState.side=d.side||'buy'; orderState.solo=!!d.solo;
    s1nav({page: d.page||'order', title: d.title || ORDER_TITLE[orderState.side] || '일반주문'}); return; }
  // 전체메뉴 일반주문 중메뉴: 인증 후 해당 주문화면/소메뉴 화면으로 이동
  if(d.go==='orderopen'){ resetOrder(); orderState.side=d.side; orderState.solo=true;
    orderState.tabs = ORDER_SUBTABS[d.ordertitle] || null; orderState.tabSel = 0;
    s1nav({page:'order', title: d.ordertitle || '일반주문'}); return; }
  if(d.go==='ivsub'){ s1nav({page:'ivsub', ivI:d.ivI, ivJ:d.ivJ, title:stripNum((IVR[d.ivI].subs[d.ivJ]||{}).t||'상세')}); return; }
  if(d.go==='daeacc'){ s1nav({page:'daeacc', ivI:d.ivI, midOpen:-1, title: fk}); return; }
  // 자주 찾는 서비스 화면: 뒤로가기 + 전체메뉴 + 홈 모두 표시
  if(d.go==='list')        s1nav({page:'list',  listKey: fk, title: fk, noBack:false, noHome:false});
  else if(d.go==='sise')   s1nav({page:'sise',  title: fk || '시세/지수조회', noBack:false, noHome:false});
  else if(d.go==='index')  s1nav({page:'index', title: fk || '국내지수', noBack:false, noHome:false});
  else                     s1nav({page:'result',resultKey: d.rk, title: fk, noBack:false, noHome:false});
  // 홈에서 진입한 경우 뒤로가기가 인증화면이 아닌 홈으로 향하도록 히스토리 정리
  if(!deep) s1state.history = [];
}
function pageTop(title){
  // 세부페이지는 우상단 버튼 숨김 / 그 외에는 전체메뉴 버튼만 표시
  const right = s1state.noHome ? '' : `<div class="back" data-menu title="전체메뉴">${I.menu}</div>`;
  const back = s1state.noBack ? '' : `<div class="back" data-s1back>${I.back}</div>`;
  return `<div class="page-top">
    ${back}
    <div class="page-title">${title}</div>
    <div class="head-spacer"></div>
    ${right}
  </div>`;
}

function renderS1(){
  const v = document.getElementById('s1view');
  const flowEl = v && v.closest('.flow'); if(flowEl) flowEl.classList.toggle('toss', s1Ver==='v40');   // Ver 4.0 토스 스킨 (전 화면 var() 토큰 오버라이드)
  let html = '';
  if(s1state.page==='home'){
    /* 자주 찾는 서비스 9개로 한눈에 구성 */
    // Ver 2.1은 9번째 셀(간편/공동인증 관리)을 셀프서비스 메뉴구조도 9번 '권리업무'로 대체 (v11 등 다른 버전은 원본 유지)
    const favSrc = (isV21Ver())
      ? FAV.map((f,i)=> i===8 ? {k:'권리업무', lb:'권리업무', ic:'ipo', go:'result', rk:'rights'}
                      : i===0 ? {k:'ID·계좌조회 PW재설정', lb:'ID·계좌조회<br>PW재설정', ic:'key', go:'result', rk:'idpw'}
                      : f)
      : FAV;
    const favGrid = `<div class="fav-grid">` + favSrc.map((f,i)=>
          `<div class="fav" data-fav data-s1go="${f.go}" data-fk="${f.k}"${f.rk?` data-rk="${f.rk}"`:''}><div class="ic">${I[f.ic]}</div><div class="lb">${f.lb||f.k}</div></div>`
        ).join('') + `</div>`;
    const chargeNote = `<div class="home-bottom">`
        + `<div class="charge"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg><span>이동통신망 이용 시 데이터 통화료가 부과될 수 있습니다</span></div>`
      + `</div>`;
    if(s1Ver==='v1'){
      /* Ver 1.0 · 과거 메인 (자주 찾는 서비스 6개 + 더보기 + 보이는 ARS + 이벤트 배너 + 푸터) — 화면구현 */
      const fav6 = `<div class="fav-grid">` + FAV.slice(0,5).map(f=>
            `<div class="fav" data-fav data-s1go="${f.go}" data-fk="${f.k}"${f.rk?` data-rk="${f.rk}"`:''}><div class="ic">${I[f.ic]}</div><div class="lb">${f.lb||f.k}</div></div>`
          ).join('')
        + `<div class="fav fav-more-cell" data-favmore><div class="ic">${I.chev}</div><div class="lb">더보기</div></div>`
        + `</div>`;
      html = `<div class="home-wrap">`
        + header('ARS', true) + noticeCard()
        + `<div class="sec-title home-sec">자주 찾는 서비스</div>`
        + fav6
        + `<div class="sec-title home-sec">보이는 ARS</div>`
        + renderIvr()
        + banner()
        + appFooter()
        + `</div>`;
    } else if(s1Ver==='v40'){
      /* Ver 4.0 · 토스 스타일 디지털 ARS (포인트=키움 마젠타·네이비) — 9 카테고리(ARS_CAT6) 토스 리스트 + 드릴다운. 전체메뉴 없음. */
      const path = s1state.sarsPath || [];
      // 우상단 큰글씨 on/off 스위치 (기존 전역 bigFont+applyScale 재사용)
      const bf = `<div class="bigfont-toggle ${bigFont?'on':''}" data-bigfont title="큰글씨 ${bigFont?'끄기':'켜기'}"><span class="bf-t">큰글씨</span><span class="bf-sw"><span class="bf-knob"></span></span></div>`;
      html = `<div class="home-wrap toss-home${bigFont?' bigfont':''}">`;
      if(path.length===0){
        html += `<div class="toss-top"><div class="toss-logo"><img src="assets/kiwoom-logo.png" alt="키움증권"></div>${bf}</div>`
          + `<div class="toss-hero"><div class="th-hi">안녕하세요,<br>무엇을 도와드릴까요?</div></div>`
          + tossFaqCard()
          + tossCatList();
      } else {
        // 드릴다운 헤더: 현재 단계 이름을 타이틀로(대메뉴 진입 시 = 대메뉴명), 대메뉴 단계면 설명글도 표기
        const dtrail = sarsWalk(ARS_CAT6, path).trail;
        const dcur = dtrail[dtrail.length-1] || {t:''};
        const dtitle = stripNum(dcur.t);
        const ddesc = (path.length===1) ? (V40_DESC[path[0]] || '') : '';
        html += `<div class="toss-top"><div class="toss-back" data-sarsup title="이전">${I.chev}</div><div class="head-spacer"></div></div>`
          + `<div class="toss-drill">`
          + `<div class="toss-dhead"><div class="td-title">${dtitle}</div>${ddesc?`<div class="td-desc">${ddesc}</div>`:''}</div>`
          + renderSimpleArs() + `</div>`;
      }
      html += `</div>`;
    } else {
      /* V2.1은 인사글+탭 위에 콘텐츠가 쌓여 스크롤 발생 → v21home(인사글 축소, 전 탭) + v21self(셀프 9그리드 축소)로 한 화면에 */
      let wrapCls = 'home-wrap';
      if(isV21Ver()){ wrapCls += ' v21home'; if((s1state.v21Tab||'self')==='self') wrapCls += ' v21self'; }
      html = `<div class="${wrapCls}">`
        + header('ARS', true) + noticeCard()
        + `<div class="home-guide"><div class="hg-hi">안녕하세요, 키움증권입니다</div><div class="hg-sub">이용하실 서비스를 선택해 주세요</div></div>`;
      if(isV21Ver()){
        /* V2.1 (ECS 피드백 반영): 인사글 아래 셀프서비스/ARS메뉴/상담원연결 인라인 탭 */
        const vt = s1state.v21Tab || 'self';
        const tabs = [['self','셀프서비스'],['ars','ARS메뉴'],['staff','상담원연결']];
        html += `<div class="v21-tabs">` + tabs.map(([k,nm])=>
            `<div class="hoga-tab ${k===vt?'on':''}" data-v21tab="${k}">${nm}</div>`).join('') + `</div>`;
        if(vt==='self')      html += favGrid + chargeNote;
        else if(vt==='ars')  html += `<div class="v21-pane"><div class="v21-arspanel">` + renderSimpleArs() + `</div></div>`;   // 시안2 화면2 인라인영역(연보라 패널)
        else                 html += `<div class="v21-pane"><div class="v21-arspanel">` + renderStaffTree() + `</div></div>`;   // 상담원연결도 동일 보라 패널
      } else {
        html += favGrid + chargeNote;
      }
      html += `</div>`;
    }
  }
  else if(s1state.page==='authsel'){
    html = pageTop(s1state.title||'본인인증') + (isIodFlow()?untactSteps(IOD_STEPS,0):'') + authSelect();
  }
  else if(s1state.page==='authstep'){
    html = pageTop(s1state.title||'본인인증') + (isIodFlow()?untactSteps(IOD_STEPS,0):'') + authStep(s1state.authMethod);
  }
  else if(s1state.page==='iodacctsel'){
    html = renderIodAcctSel();
  }
  else if(s1state.page==='iodcheck'){
    html = renderIodChecking();
  }
  else if(s1state.page==='iodresult'){
    html = renderIodResult();
  }
  else if(s1state.page==='favmore'){
    /* 전체 자주 찾는 서비스 (더보기 → 9개 전체 + 빈 아이콘 추가 슬롯 3개) */
    const empties = Array.from({length:3}).map(()=>
        `<div class="fav empty" data-favadd><div class="ic">${I.plus}</div><div class="lb">추가</div></div>`).join('');
    html = pageTop('자주 찾는 서비스')
      + `<div class="fav-grid" style="padding-top:6px">` + FAV.map(f=>
          `<div class="fav" data-fav data-s1go="${f.go}" data-fk="${f.k}"${f.rk?` data-rk="${f.rk}"`:''}><div class="ic">${I[f.ic]}</div><div class="lb">${f.lb||f.k}</div></div>`
        ).join('') + empties + `</div>`;
  }
  else if(s1state.page==='cat'){
    const tabs = Object.keys(CATS);
    html = header('ARS') + noticeCard()
      + `<div class="cat-tabs">` + tabs.map(t=>
          `<div class="cat-tab ${t===s1state.cat?'on':''}" data-cat="${t}">${t}</div>`
        ).join('') + `</div>`
      + `<div class="grid9">` + CATS[s1state.cat].map(c=>
          `<div class="cell" data-s1go="sise" data-fk="${c.k}"><div class="ic">${I[c.ic]}</div><div class="lb">${c.k}</div></div>`
        ).join('') + `</div>` + banner();
  }
  else if(s1state.page==='sise'){
    html = pageTop(s1state.title||'시세/지수조회')
      + `<div class="list">` + SISE.map(s=>
          `<div class="row" data-s1go="index" data-fk="${s.k}"><div class="ic">${I[s.ic]}</div>
            <div class="tx"><div class="t">${s.k}</div><div class="d">${s.d}</div></div>
            <div class="chev">${I.chev}</div></div>`
        ).join('') + `</div>`;
  }
  else if(s1state.page==='list'){
    const rows = DETAIL[s1state.listKey] || [];
    html = pageTop(s1state.listKey)
      + `<div class="list">` + rows.map(r=>
          `<div class="row" data-s1go="result" data-rk="${r.go}" data-fk="${r.k}"><div class="ic">${I[r.ic]}</div>
            <div class="tx"><div class="t">${r.k}</div><div class="d">${r.d}</div></div>
            <div class="chev">${I.chev}</div></div>`
        ).join('') + `</div>`;
  }
  else if(s1state.page==='result'){
    const render = RESULT[s1state.resultKey];
    html = pageTop(s1state.title||'조회 결과')
      + (render ? render() : `<div class="notice">준비 중인 화면입니다.</div>`);
  }
  else if(s1state.page==='index'){
    html = pageTop(s1state.title||'국내지수') + indexResult();
  }
  else if(s1state.page==='daeacc'){
    const dae = IVR[s1state.ivI];
    html = pageTop(s1state.title || (dae?stripNum(dae.t):'메뉴'))
      + (dae ? renderMidAcc(s1state.ivI) : `<div class="notice">준비 중인 화면입니다.</div>`);
  }
  else if(s1state.page==='order'){
    html = pageTop(s1state.title||'일반주문') + orderScreen();
  }
  else if(s1state.page==='creditbuy' || s1state.page==='creditsell'){
    // 자기융자매수 / 자기융자 매도상환: 종목검색 + (검색 시) 주문 카드
    const sel = orderState.stock;
    const stockCell = sel
      ? `<span class="stk-nm">${sel.nm}</span><span class="stk-x" data-creditclear title="종목 지우기">${I.x}</span>`
      : `<span class="ph">종목명을 검색하세요</span>`;
    const searchBar = `<div class="stk-find" data-stocksearch>${I.search}${stockCell}</div>`;
    const sideCls = orderState.side==='sell' ? 'sell' : 'buy';
    const sideNm = orderState.side==='sell' ? '매도' : '매수';
    const doneMsg = (sel && orderState.done)
      ? `<div class="ord-done ${sideCls}" style="margin:2px 16px 0">주문번호 ${orderState.done}번으로 주문이 완료되었습니다.</div>
         <div class="ord-acts row" style="margin:9px 16px 4px">
           <div class="ord-act" data-orderagain>추가${sideNm}</div>
           <div class="ord-act" data-ordfilled>체결내역</div>
           <div class="ord-act" data-ordacct>다른계좌주문</div>
           <div class="ord-act" data-arspop="직원연결">직원연결</div>
         </div>`
      : '';
    // 종목 검색 전에도 주문 카드 표시 (현재가 카드는 종목 선택 후)
    html = pageTop(s1state.title||'신용주문') + searchBar + creditOrderCard(sel ? sel.nm : null) + doneMsg;
  }
  else if(s1state.page==='agent'){
    html = pageTop(s1state.title||'상담원 연결') + agentConnectScreen(s1state.agentLabel);
  }
  else if(s1state.page==='voice'){
    html = pageTop(s1state.title||'음성 ARS 연결') + voiceConnectScreen();
  }
  else if(s1state.page==='ivmid'){
    const dae = IVR[s1state.ivI];
    html = pageTop(s1state.title || (dae?stripNum(dae.t):'주문'))
      + (dae ? ivMidPage(s1state.ivI) : `<div class="notice">준비 중인 화면입니다.</div>`);
  }
  else if(s1state.page==='ivsub'){
    const mid = (IVR[s1state.ivI]||{}).subs ? IVR[s1state.ivI].subs[s1state.ivJ] : null;
    html = pageTop(s1state.title||'메뉴 선택')
      + (mid ? ivSubPage(mid) : `<div class="notice">준비 중인 화면입니다.</div>`);
  }
  else if(s1state.page==='allmenu'){
    html = `<div class="allmenu-head">
      <div class="page-top allmenu-top">
        <div class="back" data-s1back>${I.back}</div>
        <div class="page-title">전체메뉴</div>
        <div class="head-spacer"></div>
        <div class="back" data-home title="홈">${I.home}</div>
      </div>
      ${amPills()}
    </div>` + renderAllMenu();
  }
  v.innerHTML = html;
  setTab('s1', s1state.page==='home'?'home':'');
  // 휴대폰 인증번호 화면이면 카운트다운 시작
  if(s1state.page==='authstep' && s1state.authMethod==='phone' && s1state.otpSent){ startOtpTimer(180); }
}

function indexResult(){
  return `<div class="seg">
      <button class="on">국내지수</button><button>해외지수</button>
    </div>
    <div class="select-box">코스피 ${I.down}</div>
    <div class="data-card">
      <div class="data-row"><div class="k">지수(전일대비)</div><div class="v up">2,025.08 ▲15.95</div></div>
      <div class="data-row"><div class="k">거래량(천주)</div><div class="v">179,910</div></div>
      <div class="data-row"><div class="k">거래대금(백만)</div><div class="v">1,533,276</div></div>
      <div class="data-row"><div class="k">상승 종목 수</div><div class="v up">486</div></div>
      <div class="data-row"><div class="k">하락 종목 수</div><div class="v down">300</div></div>
      <div class="data-row"><div class="k">보합 종목 수</div><div class="v">101</div></div>
      <div class="data-row"><div class="k">상한가 종목 수</div><div class="v">0</div></div>
      <div class="data-row"><div class="k">하한가 종목 수</div><div class="v">0</div></div>
    </div>`;
}

/* ===== 지수정보 안내 → 소메뉴 예시 화면 =====
   (간편모드/거래시황·등락현황 참고) */
const IDX = {
  idxKospi:{name:'종합주가 지수', value:'2,025.08', chg:'15.95', pct:'+0.79%', up:true,
    dayLow:'2,008.40', dayHigh:'2,031.55', yearLow:'1,920.30', yearHigh:'2,090.66', pos:72,
    m1:'거래량', m1v:'179,910천주', m2:'거래대금', m2v:'1,533,276백만'},
  idxKosdaq:{name:'코스닥 지수', value:'698.42', chg:'3.21', pct:'-0.46%', up:false,
    dayLow:'695.10', dayHigh:'704.80', yearLow:'650.22', yearHigh:'905.40', pos:34},
  idxKospi200:{name:'코스피 200', value:'338.15', chg:'2.64', pct:'+0.79%', up:true,
    dayLow:'335.20', dayHigh:'339.40', yearLow:'300.18', yearHigh:'360.55', pos:70},
};

/* 거래시황 스타일 — 지수 현재가 + 1일/1년 범위 */
function idxQuote(c){
  const cls = c.up?'up':'down', sign = c.up?'▲':'▼';
  return `<div class="idx-quote">
    <div class="qname">${c.name}</div>
    <div class="qval ${cls}">${c.value}</div>
    <div class="qchg ${cls}">${sign} ${c.chg} (${c.pct})</div>
    <div class="idx-hl">
      <div class="c"><div class="l">${c.m1||'1일 최저'}</div><div class="n">${c.m1v||c.dayLow}</div></div>
      <div class="c"><div class="l">${c.m2||'1일 최고'}</div><div class="n">${c.m2v||c.dayHigh}</div></div>
    </div>
    <div class="idx-realbtn" data-arspop="직원연결">직원연결</div>
  </div>`;
}

/* 등락현황 스타일 — 종목등락현황 표 */
function riseFallTable(){
  const rows = [
    {gu:'코스피', sh:4, up:46,  fl:13, dn:859,   lh:0},
  ];
  return `<div class="rf-card">
    <div class="rf-title">종목등락현황</div>
    <table class="rf-table">
      <tr><th>구분</th><th>상한</th><th>상승</th><th>보합</th><th>하락</th><th>하한</th></tr>
      ${rows.map(r=>`<tr>
        <td class="gu">${r.gu}</td>
        <td class="rf-up">${r.sh}</td>
        <td class="rf-up">${r.up}</td>
        <td class="flat">${r.fl}</td>
        <td class="rf-down">${won(r.dn)}</td>
        <td class="rf-down">${r.lh}</td>
      </tr>`).join('')}
    </table>
  </div>`;
}

function idxScene(key){
  const c = IDX[key];
  if(!c) return `<div class="notice">준비 중인 화면입니다.</div>`;
  return idxQuote(c) + riseFallTable();
}
RESULT.idxKospi     = ()=>idxScene('idxKospi');
RESULT.idxKosdaq    = ()=>idxScene('idxKosdaq');
RESULT.idxKospi200  = ()=>idxScene('idxKospi200');

/* ============================================================
   시안 2 화면 렌더 (인라인 확장)
   ============================================================ */
const s2state = {open:0, page:'list', title:''};

function renderS2(){
  const v = document.getElementById('s2view');
  if(s2state.page==='index'){
    v.innerHTML = `<div class="page-top"><div class="back" data-s2back>${I.back}</div><div class="page-title">${s2state.title}</div></div>` + indexResult();
    setTab('s2','');
    return;
  }
  let html = header('ARS')
    + `<div class="sec-title">이용하실 메뉴를 선택해 주세요</div>`
    + `<div class="list">` + INLINE.map((c,i)=>{
        const open = i===s2state.open;
        return `<div class="acc ${open?'open':''}">
          <div class="acc-head" data-acc="${i}">
            <div class="ic">${I[c.ic]}</div>
            <div class="t">${c.k}</div>
            <div class="arw">${I.down}</div>
          </div>
          <div class="acc-body">` + c.subs.map(s=>
            `<div class="sub-item" data-s2go data-fk="${s.t}">
              <div><div class="si-t">${s.t}</div><div class="si-d">${s.d}</div></div>
              <div class="chev">${I.chev}</div></div>`
          ).join('') + `</div></div>`;
      }).join('') + `</div><div style="height:14px"></div>`;
  v.innerHTML = html;
  setTab('s2','home');
}

/* ============================================================
   삼성증권 · 보이는 ARS (레퍼런스 목업)
   메인 → [시세/투자정보] → 참고1(주식현재가/투자정보 메뉴)
        → [코스피지수안내] → 참고2(코스피지수안내)
        → [등락종목안내] → 참고3(등락 종목 안내) → [이전단계] 복귀
   ============================================================ */
const SAM_I = {
  headset: I.headset,
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  person:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20a6.5 6.5 0 0113 0"/></svg>',
  menu: I.menu,
  back: I.back,
  home: I.home,
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3M8.5 21h7"/></svg>',
  agent: I.headset,
  callend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3l1.8 4.5-2.2 1.4a11 11 0 005.5 5.5l1.4-2.2L19 16v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/><path d="M16 4l5 5M21 4l-5 5"/></svg>',
  refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 0113.7-5.7L20 8"/><path d="M20 4v4h-4"/><path d="M20 12a8 8 0 01-13.7 5.7L4 16"/><path d="M4 20v-4h4"/></svg>',
  down: I.down,
  chev: I.chev,
};

/* 메인 9분할 그리드 (삼성증권_메인) */
const SAM_GRID = [
  {k:'주문',                 ic:'order'},
  {k:'시세 / 투자정보',      ic:'chart',    go:'sise'},
  {k:'거래내역 / 잔고',      ic:'wallet'},
  {k:'이체 / 청약',          ic:'transfer'},
  {k:'ISA',                  ic:'isa',      n:true},
  {k:'금융상품 / CMA',       ic:'fund'},
  {k:'사고 / 기타업무',      ic:'bell'},
  {k:'보이스피싱',           ic:'shield'},
  {k:'비대면 계좌\n개설안내', ic:'idcard'},
];

/* 참고1 좌측 카테고리 / 우측 메뉴 */
const SAM_SIDE = ['주문','주식현재가 / 투자정보','거래내역 / 잔고','이체 / 청약','ISA','금융상품 / CMA','사고 / 기타업무'];
const SAM_SISE = [
  {t:'현재가 / 호가 안내'},
  {t:'보유종목현재가조회'},
  {t:'관심종목 조회 / 등록 / 삭제'},
  {t:'코스피지수안내', go:'kospi'},
  {t:'코스닥지수안내'},
  {t:'코스피200지수 / 선물시세 안내'},
  {t:'해외지수안내'},
  {t:'매매동향/환율안내', arw:'down'},
];

/* 참고2·3 조회결과 데이터 */
const SAM_KOSPI = [
  {k:'현재지수', v:'8,203.84 (▼910.71)', cls:'down'},
  {k:'거래량',   v:'483,711 천주'},
  {k:'거래대금', v:'598,624 억원'},
];
const SAM_UPDOWN = [
  {k:'상승종목', v:'상한가 4종목 포함 46종목'},
  {k:'하락종목', v:'하한가 없이 859종목'},
  {k:'보합종목', v:'13종목'},
];

const samState = {page:'main'};
const SAM_BACK = {sise:'main', kospi:'sise', updown:'kospi'};

function samNav(p){ samState.page = p; renderSam(); }

/* 상단 보이는 ARS 다크바 (공통) */
function samArsBar(){
  return `<div class="sam-arsbar">
    <div class="l">${SAM_I.headset} 보이는 ARS</div>
    <div class="r" data-samend>${SAM_I.close} 닫기</div>
  </div><div class="sam-topline"></div>`;
}
/* 하단 바 (공통) */
function samBottom(){
  return `<div class="sam-bottom">
    <div class="b" data-samtab="음성 ARS로 연결합니다. 잠시만 기다려 주세요.">${SAM_I.mic} 음성ARS</div>
    <div class="b" data-samtab="상담원을 연결합니다. 잠시만 기다려 주세요.">${SAM_I.agent} 상담연결</div>
    <div class="b" data-samtab="통화를 종료합니다. 이용해 주셔서 감사합니다.">${SAM_I.callend} 통화종료</div>
  </div>`;
}
/* 서브 헤더 (back · 타이틀 · home) */
function samSubHead(title){
  return `<div class="sam-subhead">
    <div class="ico" data-samback>${SAM_I.back}</div>
    <div class="ttl">${title}</div>
    <div class="ico" data-samhome>${SAM_I.home}</div>
  </div>`;
}

/* 삼성증권 참고: 실제 캡쳐본 플로우 (메인→참고1→참고2→참고3) + 클릭 핫스팟
   l/t/w/h = 이미지 대비 %, go = 클릭 시 이동 페이지 */
const SAM_HOME = {l:83, t:10.5, w:15, h:7, go:'main'};   // 우측 상단 홈 아이콘 → 메인
const SAM_CAP = {
  main:   {img:'삼성증권_메인.jpeg',  hots:[{l:33.5, t:20, w:33, h:15, go:'sise'}]},          // [시세/투자정보]
  sise:   {img:'삼성증권_참고1.jpeg', hots:[{l:34,   t:42, w:64, h:6,  go:'kospi'}, SAM_HOME]},  // [코스피지수안내] + 홈
  kospi:  {img:'삼성증권_참고2.jpeg', hots:[{l:2,    t:47, w:96, h:6,  go:'updown'}, SAM_HOME]}, // [등락종목안내] + 홈
  updown: {img:'삼성증권_참고3.jpeg', hots:[{l:2,    t:47, w:96, h:6,  go:'kospi'}, SAM_HOME]},  // [이전단계] + 홈
};
function renderSam(){
  const root = document.getElementById('samscreen');
  if(!root) return;
  const cap = SAM_CAP[samState.page] || SAM_CAP.main;
  root.innerHTML = `<div class="sam-cap">
    <img src="레퍼런스/${cap.img}" alt="삼성증권 보이는 ARS 참고">
    ${cap.hots.map(h=>`<div class="sam-hot" data-samgo="${h.go}" style="left:${h.l}%;top:${h.t}%;width:${h.w}%;height:${h.h}%"></div>`).join('')}
  </div>`;
}

/* NH투자증권 참고: 단일 캡쳐(3화면 가로배치)를 배경 크롭으로 한 화면씩 표시 + 핫스팟
   pos = background-position-x, hots = 핫스팟(%, go=다음 단계) */
const NH_STEPS = {
  main: {pos:'0%',   hots:[{l:6,  t:40, w:42, h:15, go:'menu'}]},   // [ARS 메뉴]
  menu: {pos:'50%',  hots:[{l:66, t:40, w:31, h:16, go:'auth'}]},   // [계좌조회]
  auth: {pos:'100%', hots:[{l:8,  t:46, w:84, h:8,  go:'main'}]},   // [확인] → 메인
};
const nhState = {page:'main'};
function nhNav(p){ nhState.page = p; renderNH(); }
function renderNH(){
  const root = document.getElementById('nhscreen');
  if(!root) return;
  const st = NH_STEPS[nhState.page] || NH_STEPS.main;
  root.innerHTML = `<div class="nh-cap" style="background-position-x:${st.pos}">`
    + st.hots.map(h=>`<div class="sam-hot" data-nhgo="${h.go}" style="left:${h.l}%;top:${h.t}%;width:${h.w}%;height:${h.h}%"></div>`).join('')
    + `</div>`;
}

/* 한국투자증권 참고: 메인→메뉴 캡쳐 + 클릭 핫스팟 (주문·청약·펀드매매 → 현금매도) */
const HK_CAP = {
  main: {img:'한국투자증권_메인.PNG', hots:[{l:7,  t:30, w:86, h:9, go:'menu'}]},   // [주문, 청약, 펀드매매]
  menu: {img:'한국투자증권_메뉴.PNG', hots:[{l:33, t:28, w:64, h:8, go:'main'}]},   // [현금매도] → 메인
};
const hkState = {page:'main'};
function hkNav(p){ hkState.page = p; renderHK(); }
function renderHK(){
  const root = document.getElementById('hkscreen');
  if(!root) return;
  const cap = HK_CAP[hkState.page] || HK_CAP.main;
  root.innerHTML = `<div class="sam-cap">
    <img src="레퍼런스/${cap.img}" alt="한국투자증권 보이는 ARS 참고">
    ${cap.hots.map(h=>`<div class="sam-hot" data-hkgo="${h.go}" style="left:${h.l}%;top:${h.t}%;width:${h.w}%;height:${h.h}%"></div>`).join('')}
  </div>`;
}

/* 키움증권 참고(현행 ASIS): 메인 → 일반주문 → 현금매도 캡쳐 + 클릭 핫스팟 */
const KW_CAP = {
  main:  {img:'키움증권_ASIS(1).jpeg', hots:[{l:2,  t:27,   w:96, h:6,   go:'order'}]},  // [2. 일반주문]
  order: {img:'키움증권_ASIS(2).jpeg', hots:[{l:2,  t:25.3, w:96, h:5.6, go:'sell'}]},   // [2.1. 현금매도]
  sell:  {img:'키움증권_ASIS(3).jpeg', hots:[{l:25, t:58,   w:37, h:5.5, go:'main'}]},   // [통화연결] → 메인
};
const kwState = {page:'main'};
function kwNav(p){ kwState.page = p; renderKiwoom(); }
function renderKiwoom(){
  const root = document.getElementById('kwscreen');
  if(!root) return;
  const cap = KW_CAP[kwState.page] || KW_CAP.main;
  root.innerHTML = `<div class="sam-cap">
    <img src="레퍼런스/${cap.img}" alt="키움증권 현행 보이는 ARS 참고">
    ${cap.hots.map(h=>`<div class="sam-hot" data-kwgo="${h.go}" style="left:${h.l}%;top:${h.t}%;width:${h.w}%;height:${h.h}%"></div>`).join('')}
  </div>`;
}

/* ---------- 하단 네비 ---------- */
function setTab(sc, active){
  const nav = document.querySelector(`.flow[data-scheme="${sc}"] [data-nav]`);
  if(nav) nav.innerHTML = tabbar(active);
}

/* ============================================================
   인터랙션 바인딩
   ============================================================ */
function rerender(){
  applyScale();
  renderS1(); renderSam(); renderNH(); renderHK(); renderKiwoom();
}

/* ===== AI 업무챗봇 화면 (별도 앱) — 영웅문/AI업무챗봇.png 그대로 표시 =====
   상단에 겹치는 '보이는 ARS 열기' 플로팅 버튼만 동작 */
function openAiChat(){
  const screen = document.getElementById('screen');
  if(!screen || document.getElementById('aiChatOv')) return;
  const el = document.createElement('div');
  el.id = 'aiChatOv';
  el.className = 'aichat-ov';
  el.innerHTML = `<img class="aichat-img" src="영웅문/AI업무챗봇.png" alt="AI 업무챗봇">
    <div class="ars-float" data-arsopen><span class="af-ic">${I.headset}</span> 보이는 ARS 열기</div>`;
  screen.appendChild(el);
}
function closeAiChat(){ const e=document.getElementById('aiChatOv'); if(e) e.remove(); }

/* 휴대폰 인증 OTP: 6자리 입력 시 자동 완료 + Enter 완료
   (모바일 소프트키보드가 [인증 완료] 버튼을 가리고 인증 화면이 스크롤되지 않아 버튼을 못 누르는 문제 대응) */
document.addEventListener('input', (e)=>{
  const el = e.target;
  if(!el || el.id !== 'otpNo') return;
  el.value = el.value.replace(/\D/g, '').slice(0, 6);   // 숫자만, 최대 6자리
  if(el.value.length === 6){
    const btn = document.querySelector('[data-otpdone]');
    if(btn) btn.click();                                 // 자동 인증 완료(버튼 탭 불필요)
  }
});
document.addEventListener('keydown', (e)=>{
  if(e.target && e.target.id === 'otpNo' && e.key === 'Enter'){
    e.preventDefault();
    const btn = document.querySelector('[data-otpdone]');
    if(btn) btn.click();
  }
});

document.addEventListener('click', (e)=>{
  const t = e.target;

  // AI 챗봇 → '보이는 ARS 열기' 플로팅 버튼: 챗봇 닫고 보이는 ARS 화면으로
  if(t.closest('[data-arsopen]')){ closeAiChat(); selectSian('s1'); return; }

  // 음성 ARS 연결 안내 팝업
  if(t.closest('[data-mok]')){ closeModal(); s1nav({page:'voice', title:'음성 ARS 연결', fromFav:false}); return; }
  // 직원연결 메뉴: 안내 팝업 없이 바로 상담원 연결 화면으로 이동(클릭 메뉴 내용 표기)
  const staff = t.closest('[data-staffconnect]');
  if(staff){ s1nav({page:'agent', title:'상담원 연결', agentLabel: staff.dataset.staffconnect, fromFav:false}); return; }
  if(t.closest('[data-mcancel]')){ closeModal(); return; }
  if(t.classList.contains('modal-ov')){ closeModal(); return; }

  // 일반/간편 토글
  const m = t.closest('[data-mode]');
  if(m){ mode = m.dataset.mode; rerender(); return; }
  // 큰글씨
  if(t.closest('[data-bigfont]')){ bigFont=!bigFont; rerender(); return; }

  // 영웅문S# 앱 연결 팝업: 열기 / 연결 / 취소 / 배경탭 닫기
  const al = t.closest('[data-applink]');
  if(al){ openAppLink(al.dataset.applink); return; }
  if(t.closest('[data-appgo]')){
    const pop = document.getElementById('appPop'); const ttl = pop ? pop.dataset.linkTitle : '';
    flash(`영웅문S#으로 연결합니다. 계좌정보 연동 후 ${ttl} 화면으로 이동합니다. (시연용)`);
    closeAppLink(); return;
  }
  if(t.closest('[data-appcancel]') || (t.classList && t.classList.contains('app-pop-ov'))){ closeAppLink(); return; }

  // Ver 4.0 · 상담연결 안내 팝업: 채널 선택 / 닫기(닫기버튼·배경탭)
  const csch = t.closest('[data-cschannel]');
  if(csch){
    if(csch.classList.contains('soon')){ flash('디지털 ARS는 2027년 2월 오픈 예정이에요. 조금만 기다려 주세요!'); return; }
    const csEl = document.getElementById('consultPop');
    const lbl = csEl ? (csEl.dataset.csLabel||'') : '';
    const k = csch.dataset.cschannel;
    const CS_MSG = {
      hero:  sessionAuthed ? `영웅문S#으로 연결합니다. ‘${lbl}’ 화면으로 바로 이동해요. (시연용)` : '영웅문S#을 실행합니다. 원하시는 업무 화면으로 이동해요. (시연용)',
      chat:  '24시간 AI 챗봇 상담으로 연결합니다. (시연용)',
      voice: `음성 ARS 안내로 연결합니다. ‘${lbl}’ 시나리오를 안내해 드려요. (시연용)`,
      call:  '담당 부서 상담원에게 연결합니다. 연결까지 잠시만 기다려 주세요. (시연용)',
    };
    closeConsult();
    flash(CS_MSG[k] || '상담을 연결합니다. (시연용)');
    return;
  }
  if(t.closest('[data-csclose]') || (t.classList && t.classList.contains('consult-ov'))){ closeConsult(); return; }

  // 입출금 안내 플로우: 진입(계좌 인증) / 계좌번호 모름(본인인증 선택) / 결과 사유 토글
  if(t.closest('[data-iodstart]')){
    s1state.authNext = {go:'iodcheck'};
    s1state.iodAcctNo = '';   // 새 플로우 시작 → 자동입력 계좌번호 초기화
    s1nav({page:'authstep', authMethod:'account', title:'계좌 인증', acctPw:'', otpSent:false, fromFav:false, noBack:false, noHome:true});
    return;
  }
  if(t.closest('[data-iodfind]')){ s1nav({page:'authsel', title:'계좌번호 찾기', acctPw:'', otpSent:false, noHome:true}); return; }
  const iodr = t.closest('[data-iodres]');
  if(iodr){ s1state.iodResult = iodr.dataset.iodres; renderS1(); return; }

  // 시연용 토스트 버튼
  const fl = t.closest('[data-flash]');
  if(fl){ flash(fl.dataset.flash); return; }
  // 알림 토글 스위치
  const sw = t.closest('[data-sw]');
  if(sw){ sw.classList.toggle('on'); return; }

  /* ---- 시안 1 ---- */
  // 자주 찾는 서비스 더보기
  if(t.closest('[data-favmore]')){ s1nav({page:'favmore', title:'자주 찾는 서비스', fromFav:true}); return; }
  // 자주 찾는 서비스 추가: 빈 슬롯 클릭 → 후보 시트 / 후보 선택 → FAV 추가 / 닫기
  if(t.closest('[data-favadd]')){ openFavAdd(); return; }
  const fpick = t.closest('[data-favpick]');
  if(fpick){
    const i = +fpick.dataset.favpick; const f = FAV_ADD.splice(i,1)[0];
    closeFavAdd();
    if(f){ FAV.push(f); renderS1(); flash(`‘${f.k}’를 자주 찾는 서비스에 추가했습니다.`); }
    return;
  }
  if(t.closest('[data-favaddclose]') || (t.classList && t.classList.contains('fav-add-ov'))){ closeFavAdd(); return; }
  // 본인인증 방법 선택 → 해당 인증단계 화면으로 이동
  const authm = t.closest('[data-auth]');
  if(authm){
    s1nav({page:'authstep', authMethod: authm.dataset.auth, title:'본인인증', acctPw:'', otpSent:false});
    return;
  }
  // 휴대폰 인증: 인증번호 요청 → 인증번호 입력칸 노출
  if(t.closest('[data-otpreq]')){ s1state.otpSent = true; renderS1(); return; }
  // 휴대폰 인증: 인증 완료 → 계좌 비밀번호 키패드(계좌번호 라인 포함)
  if(t.closest('[data-otpdone]')){
    const otp = (document.getElementById('otpNo')||{}).value || '';
    if(!otp.trim()){ flash('인증번호를 입력해주세요.'); return; }
    flash('휴대폰 인증이 완료되었습니다. (시연용)');
    if(isIodFlow()){ s1nav({page:'iodacctsel', title:'계좌 선택', otpSent:false, noHome:true}); return; }   // 입출금 플로우: 계좌 선택 리스트로
    openPwKeypad(true); return;
  }
  // 간편인증서 제공자 선택 → 제공자 인증 완료 후 계좌 비밀번호 키패드
  const sp = t.closest('[data-simplepick]');
  if(sp){
    flash(`${sp.dataset.simplepick} 인증이 완료되었습니다. (시연용)`);
    if(isIodFlow()){ s1nav({page:'iodacctsel', title:'계좌 선택', noHome:true}); return; }   // 입출금 플로우: 계좌 선택 리스트로
    openPwKeypad(true); return;
  }
  // 입출금 플로우: 계좌 선택 → 계좌 인증 화면으로 돌아가 선택 계좌번호 자동 입력
  const iacc = t.closest('[data-iodacct]');
  if(iacc){
    const i = +iacc.dataset.iodacct;
    selAcct = i; authAcct = {type:ACCOUNTS[i].type, no:ACCOUNTS[i].no};
    s1state.iodAcctNo = ACCOUNTS[i].no;
    s1nav({page:'authstep', authMethod:'account', title:'계좌 인증', acctPw:'', otpSent:false, noHome:true});
    return;
  }
  // 간편비밀번호(PIN) 변경: 키패드 입력 → 점 채우기 / 6자리 시 단계 진행
  const pk = t.closest('[data-pinkey]');
  if(pk){ pinPress(pk.dataset.pinkey); return; }
  // 계좌 비밀번호 입력란 터치 → 플로팅 키패드 (계좌번호 라인 없음)
  if(t.closest('[data-pwopen]')){ openPwKeypad(false); return; }
  // 키패드 바깥(backdrop) 터치 → 닫기
  if(t.classList && t.classList.contains('kp-ov')){ closePwKeypad(); return; }
  // 키패드 숫자 입력 / 지우기
  const key = t.closest('[data-key]');
  if(key){
    const k = key.dataset.key;
    if(k==='back') s1state.acctPw = s1state.acctPw.slice(0,-1);
    else if(s1state.acctPw.length < 8) s1state.acctPw += k;
    const dots = '●'.repeat(s1state.acctPw.length);
    ['acctPwDisp','kpDots'].forEach(id=>{ const d=document.getElementById(id); if(d) d.textContent = dots; });
    return;
  }
  // 키패드 취소 → 입력 취소 후 닫기
  if(t.closest('[data-kpcancel]')){
    s1state.acctPw = ''; const d=document.getElementById('acctPwDisp'); if(d) d.textContent='';
    closePwKeypad(); return;
  }
  // 키패드 입력완료 → 비밀번호 확정 후 닫기 (휴대폰 인증은 바로 조회화면으로)
  if(t.closest('[data-kpconfirm]')){
    if((s1state.acctPw||'').length < 4){ flash('비밀번호를 4자리 이상 입력해주세요.'); return; }
    closePwKeypad();
    if(pwCtx==='change'){           // 거래내역 계좌변경: 다른 계좌 선택 후 비번 확인 → 적용
      s1state.acctPw = '';
      pwCtx='';
      if(pendingAcct>=0){ selAcct=pendingAcct; authAcct={type:ACCOUNTS[selAcct].type, no:ACCOUNTS[selAcct].no}; pendingAcct=-1; }
      flash('계좌가 변경되었습니다. (시연용)');
      renderS1(); return;
    }
    if(s1state.authMethod==='phone' || s1state.authMethod==='simple'){
      s1state.acctPw = '';
      authAcct = {type:ACCOUNTS[selAcct].type, no:ACCOUNTS[selAcct].no};
      flash('계좌 인증이 완료되었습니다. (시연용)');
      gotoAuthNext();
      return;
    }
    // 계좌번호 인증: 비밀번호는 유지하고 키패드만 닫음 → 하단 '확인'(data-authdone)에서 최종 인증
    return;
  }
  // 인증 완료 → 원래 목적지(예수금/잔고)로 이동
  const done = t.closest('[data-authdone]');
  if(done){
    if(s1state.authMethod==='account'){
      const acctNo = (document.getElementById('acctNo')||{}).value || '';
      if(!acctNo.trim()){ flash('계좌번호를 입력해주세요.'); return; }
      if((s1state.acctPw||'').length < 4){ flash('계좌 비밀번호를 입력해주세요. (4자리 이상)'); return; }
      authAcct = {type:'위탁종합', no:acctNo.trim()};   // 입력한 계좌번호를 거래내역에 표시
      closePwKeypad();
    }
    const NAMES = {phone:'휴대폰', simple:'간편(민간인증서)', account:'계좌번호'};
    const via = done.dataset.authdone || NAMES[s1state.authMethod] || '본인';
    flash(`${via} 인증이 완료되었습니다. (시연용)`);
    gotoAuthNext();
    return;
  }
  const s1go = t.closest('[data-s1go]');
  if(s1go){
    const go = s1go.dataset.s1go, fk = s1go.dataset.fk, rk = s1go.dataset.rk;
    const isFav = !!s1go.closest('[data-fav]');
    // 자주 찾는 서비스 항목 전체 → 본인인증 절차를 먼저 거친 뒤 원래 목적지로 이동
    if(isFav){
      s1state.authNext = {go, rk, fk};
      if(sessionAuthed){            // 이미 인증된 세션 → 추가 인증 없이 바로 이동
        // 더보기에서 인증 생략 접속 = 상세로 판단(뒤로가기만), 홈에서 접속 = 메인(홈만)
        const deep = (s1state.page === 'favmore');
        s1state.fromFav = true;
        gotoAuthNext(deep);
      } else {
        s1nav({page:'authsel', authNext:{go, rk, fk}, title:'본인인증', fromFav:true, otpSent:false, acctPw:'', noBack:false});
      }
      return;
    }
    // 자주 찾는 서비스에서 출발했으면 홈 버튼이 유지되도록 fromFav 전파
    const fromFav = s1state.page==='home' ? false : s1state.fromFav;
    if(go==='sise')        s1nav({page:'sise',  title: fk || '시세/지수조회', fromFav});
    else if(go==='index')  s1nav({page:'index', title: fk || '국내지수', fromFav});
    else if(go==='list')   s1nav({page:'list',  listKey: fk, title: fk, fromFav});
    else if(go==='result') s1nav({page:'result',resultKey: rk, title: fk, fromFav, noHome: (s1state.page==='list' && s1state.fromFav)});
    return;
  }
  if(t.closest('[data-s1back]')){ s1back(); return; }
  // 고객센터 '원활' 배지 / 좌측 패널 '본인인증 생략' → 본인인증 세션 활성화(시연용): 이후 모든 인증 절차 생략
  const skip = t.closest('[data-skipauth]');
  if(skip){
    const srBtn = document.querySelector('#sianList [data-skipauth]');
    // 좌측 패널 버튼이 이미 활성(생략 ON)인 상태에서 다시 클릭 → 생략 해제(본인인증 절차 재개)
    if(skip.closest('#sianList') && sessionAuthed){
      sessionAuthed = false;
      if(srBtn){ srBtn.classList.remove('on'); const tel=srBtn.querySelector('.rf-tel'); if(tel) tel.textContent='클릭 시 이후 인증 생략 (시연용)'; }
      flash('본인인증 생략을 해제했습니다. 이후 본인인증 절차를 진행합니다.');
      return;
    }
    // 그 외 → 본인인증 생략 활성화
    sessionAuthed = true;
    if(srBtn){ srBtn.classList.add('on'); const tel=srBtn.querySelector('.rf-tel'); if(tel) tel.textContent='인증 생략 켜짐 (시연용)'; }
    flash('본인인증이 완료되어 이후 인증을 생략합니다. (시연용)');
    return;
  }
  // 전체메뉴 홈 아이콘 → 메인화면으로
  if(t.closest('[data-home]')){ closeMenuDrawer(); s1state.page='home'; s1state.fromFav=false; s1state.history=[]; renderS1(); return; }
  const cat = t.closest('[data-cat]');
  if(cat){ s1state.cat = cat.dataset.cat; renderS1(); return; }
  // V2.1 메인 인라인 탭(셀프서비스/ARS메뉴/상담원연결) 전환 — 트리 상태 초기화
  const v21 = t.closest('[data-v21tab]');
  if(v21){ s1state.v21Tab=v21.dataset.v21tab; s1state.sarsPath=[]; s1state.amOpen=-1; s1state.amOpen2=-1; renderS1(); return; }
  // [큰글씨] ON · 큰 카드 아코디언: 카드 탭=인라인 펼침/접힘, 서비스 탭=해당 카테고리 소메뉴 드릴다운
  // Ver 4.0 · '상담 없이 해결할 수 있어요' 자가해결 카드 펼침/접기 (화살표)
  if(t.closest('[data-faqtoggle]')){ s1state.faqOpen = !s1state.faqOpen; renderS1(); return; }
  // 전체메뉴(햄버거) → 오른쪽에서 슬라이딩하는 드로어로 열기
  if(t.closest('[data-menu]')){ s1state.amTab='ars'; s1state.amOpen=0; s1state.amOpen2=-1; s1state.sarsPath=[]; s1state.amCat='self'; s1state.amTreeOpen={}; openMenuDrawer(); return; }
  // V2.1 전체메뉴: 좌측 대메뉴(셀프서비스/ARS/상담원연결) 선택 → 아코디언 초기화
  const amc = t.closest('[data-amcat]');
  if(amc){ s1state.amCat=amc.dataset.amcat; s1state.amTreeOpen={}; refreshMenu(); return; }
  // V2.1 전체메뉴: 중첩 아코디언 노드 펼침/접힘 (path 키)
  const amacc = t.closest('[data-amacc]');
  if(amacc){ const p=amacc.dataset.amacc; s1state.amTreeOpen[p]=!s1state.amTreeOpen[p]; refreshMenu(); return; }
  if(t.closest('[data-menuclose]') || (t.classList && t.classList.contains('menu-ov'))){ closeMenuDrawer(); return; }
  // 자주 찾는 서비스 / 보이는 ARS 세그먼트 전환 (선택 대분류 초기화)
  const amtab = t.closest('[data-amtab]');
  if(amtab){ s1state.amTab = amtab.dataset.amtab; s1state.amOpen = 0; s1state.amOpen2 = -1; s1state.sarsPath = []; refreshMenu(); return; }
  // V2.0 단순 ARS 번호 드릴다운: 하위 있으면 다음 단계 이동 / 이전 / 리프는 최종(화면 미연결)
  const sdn = t.closest('[data-sarsdown]');
  if(sdn){ const i=+sdn.dataset.sarsdown; s1state.sarsPath=[...(s1state.sarsPath||[]), i]; refreshMenu(); return; }
  if(t.closest('[data-sarsup]')){ (s1state.sarsPath = s1state.sarsPath||[]).pop(); refreshMenu(); return; }
  const slf = t.closest('[data-sarsleaf]');
  if(slf){
    if(s1Ver==='v40'){ openConsult(slf.dataset.sarsleaf, {exclude:['call']}); return; }   // Ver 4.0: 음성ARS 최종메뉴 → 상담연결 팝업(전화상담 제외)
    flash(`‘${slf.dataset.sarsleaf}’ 음성 ARS 최종 메뉴입니다. (메뉴 연결 안내 · 화면 미연결)`); return; }
  // 전체메뉴: 좌측 대메뉴 선택(고정), 우측 중메뉴 표시
  const am1 = t.closest('[data-am1]');
  if(am1){ const i=+am1.dataset.am1; s1state.amOpen=i; s1state.amOpen2=-1; refreshMenu(); return; }
  const am2 = t.closest('[data-am2]');
  if(am2){ const j=+am2.dataset.am2; s1state.amOpen2=(s1state.amOpen2===j?-1:j); refreshMenu(); return; }
  // 메인: 대메뉴 클릭 → 중/소메뉴 아코디언 화면으로 이동
  const ivdae = t.closest('[data-ivdae]');
  if(ivdae){
    const i=+ivdae.dataset.ivdae;
    const name = stripNum(IVR[i].t);
    const noAuth = (name==='시세 및 시황');   // 시세 및 시황은 본인인증 생략
    // 모든 대메뉴 → 중메뉴 리스트(daeacc). (일반주문도 현금매도·매수 등 중메뉴를 먼저 표시)
    const dest = {go:'daeacc', ivI:i, fk:name};
    // 보이는 ARS는 '계좌번호 인증'만 사용. 미인증이면 계좌번호 인증 절차, 인증되면 바로 이용.
    if(!sessionAuthed && !noAuth){
      s1state.authNext = dest;
      s1nav({page:'authstep', authMethod:'account', title:'본인인증', acctPw:'', otpSent:false, fromFav:false});
      return;
    }
    s1nav({page:'daeacc', ivI:i, midOpen:-1, title:name, fromFav:false});
    return;
  }
  // 일반주문 중메뉴(현금매도·매수·정정·취소) → 주문화면(해당 탭)으로 이동
  // 주문화면 하위 탭(신용매도 등) 전환
  const ctab = t.closest('[data-credittab]');
  if(ctab){ orderState.tabSel = +ctab.dataset.credittab; renderS1(); return; }
  const oopen = t.closest('[data-orderopen]');
  if(oopen){
    const otitle = oopen.dataset.ordertitle || ORDER_TITLE[oopen.dataset.orderopen] || '일반주문';
    // 전체메뉴에서 일반주문 중메뉴 클릭: 미인증이면 본인계좌 인증 먼저
    if(!sessionAuthed && t.closest('.menu-panel')){
      s1state.authNext = {go:'orderopen', side:oopen.dataset.orderopen, ordertitle:otitle};
      s1nav({page:'authstep', authMethod:'account', title:'본인인증', acctPw:'', otpSent:false, fromFav:false});
      return;
    }
    resetOrder(); orderState.side = oopen.dataset.orderopen; orderState.solo = true;
    orderState.tabs = ORDER_SUBTABS[otitle] || null; orderState.tabSel = 0;
    s1nav({page:'order', title: otitle, fromFav:false}); return;
  }
  // 현재가 및 호가안내: 호가 탭(호가잔량/5단호가/당일시고저) 전환
  const ptab = t.closest('[data-pricetab]');
  if(ptab){ s1state.priceTab = ptab.dataset.pricetab; renderS1(); return; }
  // 현재가 및 호가안내 ARS 주문 → 일반주문(선택 종목 유지). 미인증 시 본인명의 계좌인증 절차부터.
  const arso = t.closest('[data-arsorder]');
  if(arso){ const nm = arso.dataset.arsorder;
    if(!sessionAuthed){
      s1state.authNext = {go:'order', stock:nm};
      s1nav({page:'authstep', authMethod:'account', title:'본인인증', acctPw:'', otpSent:false, fromFav:false});
      return;
    }
    resetOrder();
    if(nm){ const info = stockInfo(nm); orderState.stock = {nm:nm, cur:info.cur, chg:info.chg, pct:info.pct, tick:info.tick}; }
    s1nav({page:'order', title:'일반주문', fromFav:false}); return; }
  // 일반주문 주문화면 인터랙션
  const oside = t.closest('[data-ordside]');
  if(oside){ orderState.side = oside.dataset.ordside; renderS1(); return; }
  const otype = t.closest('[data-ordtype]');
  if(otype){ orderState.type = otype.dataset.ordtype; renderS1(); return; }
  // 주문화면 종목 지우기 / 종목 돋보기 → 종목검색창
  if(t.closest('[data-ordstockclear]')){ orderState.stock=null; renderS1(); return; }
  if(t.closest('[data-ordsearch]')){ openStockSearch(); return; }
  // 주문유형 선택창
  if(t.closest('[data-ordtypesel]')){ openOrderTypeSheet(); return; }
  const otpick = t.closest('[data-ordtypepick]');
  if(otpick){ orderState.type = otpick.dataset.ordtypepick; closeTxOverlay(); renderS1(); return; }
  const oprice = t.closest('[data-ordprice]');
  if(oprice){
    if(orderState.type!=='시장가'){
      const step = orderState.stock ? orderState.stock.tick : 100;
      const base = parseInt(orderState.price,10) || (orderState.stock ? orderState.stock.cur : 0);
      orderState.price = String(Math.max(step, base + (oprice.dataset.ordprice==='up'?step:-step)));
      renderS1();
    }
    return;
  }
  const oqty = t.closest('[data-ordqty]');
  if(oqty){ orderState.qty = String(Math.max(1, (parseInt(orderState.qty,10)||0) + (oqty.dataset.ordqty==='up'?1:-1))); renderS1(); return; }
  if(t.closest('[data-ordsubmit]')){
    if(!orderState.stock){ flash('종목을 선택해주세요.'); return; }
    const isMarket = orderState.type.startsWith('시장가') || orderState.type==='시간외 종가';
    if(!isMarket && !(parseInt(orderState.price,10) > 0)){ flash('주문가격을 입력해주세요.'); return; }
    if(!(parseInt(orderState.qty,10) > 0)){ flash('주문수량을 입력해주세요.'); return; }
    showOrderConfirm();
    return;
  }
  // 주문확인 바텀시트: 배경 딤 클릭 / 취소 / 확인(주문 완료)
  if(t.classList && t.classList.contains('ordc-ov')){ closeOrdConfirm(); return; }
  if(t.closest('[data-ordcancel]')){ closeOrdConfirm(); return; }
  if(t.closest('[data-ordconfirm]')){
    closeOrdConfirm();
    orderState.done = String(Math.floor(100000 + Math.random()*900000));
    renderS1();
    return;
  }
  // 주문 완료 후 후속 액션
  if(t.closest('[data-orderagain]')){ const sd=orderState.side, tb=orderState.tabs, ts=orderState.tabSel; resetOrder(); orderState.side=sd; orderState.solo=true; orderState.tabs=tb; orderState.tabSel=ts; renderS1(); return; }
  if(t.closest('[data-ordfilled]')){ s1nav({page:'result', resultKey:'filled', title:'체결 내역', fromFav:false}); return; }
  if(t.closest('[data-ordacct]')){
    // 다른 계좌로 주문: 계좌인증 후 클릭했던 주문화면으로 복귀(종목 초기화)
    sessionAuthed = false;
    const back = {page: s1state.page, side: orderState.side, title: s1state.title, solo: !!orderState.solo};
    resetOrder();
    s1state.authNext = {go:'reorder', page: back.page, side: back.side, title: back.title, solo: back.solo};
    s1nav({page:'authstep', authMethod:'account', title:'본인인증', acctPw:'', otpSent:false, fromFav:false});
    return;
  }
  // 계좌 선택 플로팅 (휴대폰/간편 추가인증 키패드의 계좌 라인)
  if(t.closest('[data-acctsel]')){ openAcctSheet(); return; }
  // 거래내역 계좌변경: 계좌리스트 먼저 표시 (현재 계좌 하이라이트)
  if(t.closest('[data-acctchange]')){
    const idx = ACCOUNTS.findIndex(a=>a.type===authAcct.type && a.no===authAcct.no);
    if(idx>=0) selAcct = idx;
    openAcctSheet(); return;
  }
  if(t.closest('[data-acctclose]')){ closeAcctSheet(); return; }
  const ap = t.closest('[data-acctpick]');
  if(ap){
    const idx = +ap.dataset.acctpick;
    closeAcctSheet();
    const line=document.querySelector('#pwKeypad .kp-acct');
    if(line){ selAcct = idx; line.innerHTML = acctLineHTML(); return; }   // 인증 키패드 내 계좌 선택
    // 거래내역 계좌변경: 같은 계좌면 변경 없음, 다른 계좌면 비밀번호 키패드
    const picked = ACCOUNTS[idx];
    if(picked.type===authAcct.type && picked.no===authAcct.no) return;
    pendingAcct = idx;
    openPwKeypad(false, 'change');
    return;
  }
  // 체결내역 체결/미체결/예약 구분
  const otab = t.closest('[data-ordertab]');
  if(otab){ orderTab = otab.dataset.ordertab; renderS1(); return; }
  // 거래내역 필터: 종목검색 / 기간선택 오버레이
  if(t.closest('[data-stockclear]')){ txFilter.stock=''; renderS1(); return; }
  if(t.closest('[data-creditclear]')){ const sd = s1state.page==='creditsell'?'sell':'buy'; resetOrder(); orderState.side=sd; renderS1(); return; }
  // 신용매수 → 자기융자매수: 종목검색+주문카드 화면으로 이동
  if(t.closest('[data-creditbuy]')){ resetOrder(); orderState.side='buy'; s1nav({page:'creditbuy', title:'자기융자매수', fromFav:false}); return; }
  // 신용매도 → 자기융자 매도상환: 종목검색+주문카드 화면으로 이동
  if(t.closest('[data-creditsell]')){ resetOrder(); orderState.side='sell'; s1nav({page:'creditsell', title:'자기융자 매도상환', fromFav:false}); return; }
  if(t.closest('[data-stocksearch]')){ openStockSearch(); return; }
  // 증명서 발급 폼 드롭다운: 열기 / 옵션 선택 / 닫기 (날짜 필드는 달력 피커)
  const csel = t.closest('[data-certsel]');
  if(csel){ const k=csel.dataset.certsel; if(CERT_OPTS[k] && CERT_OPTS[k].cal) openCalendar(k); else openCertSheet(k); return; }
  if(t.closest('[data-certclose]')){ closeCertSheet(); return; }
  const cpk = t.closest('[data-certpick]');
  if(cpk){ const sh=document.getElementById('certSheet'); if(sh) certSel[sh.dataset.certkey]=cpk.dataset.certpick; closeCertSheet(); renderS1(); return; }
  // 달력 피커: 월 이동 / 날짜 선택 / 적용 / 닫기
  const cmv = t.closest('[data-calmove]');
  if(cmv){ let mo=calState.m + (+cmv.dataset.calmove); let yr=calState.y;
    if(mo<1){mo=12;yr--;} if(mo>12){mo=1;yr++;} calState.m=mo; calState.y=yr; calRefresh(); return; }
  const cday = t.closest('[data-calday]');
  if(cday){ calPickDay(+cday.dataset.calday); return; }
  if(t.closest('[data-calapply]')){ calApply(); return; }
  if(t.closest('[data-calclose]')){ closeCalendar(); return; }
  if(t.closest('[data-periodsel]')){ openPeriodSheet(); return; }
  if(t.closest('[data-datesel]')){ openDateSheet(); return; }
  const dpc = t.closest('[data-datepreset]');
  if(dpc){ orderDateSel = dpc.dataset.datepreset; orderDate = {...DATE_PRESETS[orderDateSel].d};
    const ov=document.getElementById('txOverlay'); if(ov) ov.innerHTML=dateSheetHTML(); return; }
  if(t.closest('[data-dateapply]')){ closeTxOverlay(); renderS1(); return; }
  if(t.closest('[data-txclose]')){ closeTxOverlay(); return; }
  if(t.classList && t.classList.contains('tx-ov')){
    if(t.id==='acctSheet') closeAcctSheet();
    else if(t.id==='certSheet') closeCertSheet();
    else if(t.id==='calSheet') closeCalendar();
    else closeTxOverlay();
    return;
  }
  const stk = t.closest('[data-stockpick]');
  if(stk){
    const nm = stk.dataset.stockpick;
    const info = stockInfo(nm);
    if(s1state.page==='order'){                        // 주문화면: 종목·현재가·등락률 표기 (가격·수량은 비워둠)
      orderState.stock = {nm:nm, cur:info.cur, chg:info.chg, pct:info.pct, tick:info.tick};
    } else if(s1state.page==='creditbuy' || s1state.page==='creditsell'){  // 신용 주문 카드용 orderState에 종목 설정
      orderState.stock = {nm:nm, cur:info.cur, chg:info.chg, pct:info.pct, tick:info.tick};
      orderState.done = '';
    } else {
      txFilter.stock = nm;                             // 거래/체결내역·현재가호가안내면 필터
    }
    closeTxOverlay(); renderS1(); return;
  }
  const pch = t.closest('[data-period]');
  if(pch){ txPeriodSel = pch.dataset.period; const ov=document.getElementById('txOverlay'); if(ov) ov.innerHTML=periodSheetHTML(); return; }
  if(t.closest('[data-periodapply]')){
    const p=PERIOD_PRESETS[txPeriodSel];
    txFilter.period = `${fmtP(p.s)} ~ ${fmtP(p.e)}`;
    closeTxOverlay(); renderS1(); return;
  }
  // 대메뉴 상세: 소메뉴 있는 중메뉴 → 다음 페이지(버튼식 소메뉴)
  const ivsub = t.closest('[data-ivsub]');
  if(ivsub){ const p=ivsub.dataset.ivsub.split('_'); const i=+p[0], j=+p[1];
    // 전체메뉴에서 일반주문 소메뉴(신용매도/매수 등) 클릭: 미인증이면 본인계좌 인증 먼저
    if(!sessionAuthed && t.closest('.menu-panel') && IVR[i] && stripNum(IVR[i].t)==='일반주문'){
      s1state.authNext = {go:'ivsub', ivI:i, ivJ:j};
      s1nav({page:'authstep', authMethod:'account', title:'본인인증', acctPw:'', otpSent:false, fromFav:false});
      return;
    }
    s1nav({page:'ivsub', ivI:i, ivJ:j, title:stripNum((IVR[i].subs[j]||{}).t||'상세'), fromFav:false}); return; }
  // 대메뉴 상세: 중메뉴 펼침
  const mid2 = t.closest('[data-mid2]');
  if(mid2){ const j=+mid2.dataset.mid2; s1state.midOpen=(s1state.midOpen===j?-1:j); renderS1(); return; }
  // 음성 ARS 연결 안내 팝업
  const pop = t.closest('[data-arspop]');
  if(pop){
    if(s1Ver==='v40'){ openConsult(stripNum(pop.dataset.arspop), {exclude:['voice']}); return; }   // Ver 4.0: 직원연결 최종메뉴 → 상담연결 팝업(음성ARS 제외)
    // 상담 분야 결정
    const lbl = pop.dataset.arspop;
    let field;
    if(!isAgent(lbl)){
      field = lbl;                                   // 특정 메뉴 연결(음성 ARS 등) → 그 메뉴명
    } else if(t.closest('.menu-panel')){
      // 전체메뉴 드로어의 직원연결 → 선택된 대메뉴명 (예: 일반주문)
      const sel = s1state.amOpen < 0 ? 0 : Math.min(s1state.amOpen, IVR.length-1);
      field = stripNum((IVR[sel]||{}).t || '');
    } else {
      field = s1state.title || '';                   // 일반 화면 직원연결 → 현재 화면 타이틀
    }
    s1nav({page:'agent', title:'상담원 연결', agentLabel: field, fromFav:false}); return;
  }

  /* ---- 시안 2 ---- */
  const acc = t.closest('[data-acc]');
  if(acc){ const i=+acc.dataset.acc; s2state.open = (s2state.open===i? -1 : i); renderS2(); return; }
  const s2go = t.closest('[data-s2go]');
  if(s2go){ s2state.page='index'; s2state.title = s2go.dataset.fk || '국내지수'; renderS2(); return; }
  if(t.closest('[data-s2back]')){ s2state.page='list'; renderS2(); return; }

  /* ---- 삼성증권 (보이는 ARS) ---- */
  const samFl = t.closest('[data-samflash]');
  if(samFl){ flash(samFl.dataset.samflash); return; }
  const samGo = t.closest('[data-samgo]');
  if(samGo){ samNav(samGo.dataset.samgo); return; }
  /* ---- NH투자증권 (보이는 ARS) ---- */
  const nhGo = t.closest('[data-nhgo]');
  if(nhGo){ nhNav(nhGo.dataset.nhgo); return; }
  /* ---- 한국투자증권 (보이는 ARS) ---- */
  const hkGo = t.closest('[data-hkgo]');
  if(hkGo){ hkNav(hkGo.dataset.hkgo); return; }
  const kwGo = t.closest('[data-kwgo]');
  if(kwGo){ kwNav(kwGo.dataset.kwgo); return; }
  if(t.closest('[data-samback]')){ samNav(SAM_BACK[samState.page] || 'main'); return; }
  if(t.closest('[data-samhome]')){ samNav('main'); return; }
  const samTab = t.closest('[data-samtab]');
  if(samTab){ flash(samTab.dataset.samtab); return; }
  if(t.closest('[data-samend]')){ flash('보이는 ARS를 종료합니다.'); return; }

  /* ---- 하단 네비 ---- */
  const tab = t.closest('[data-tab]');
  if(tab){
    const which = tab.dataset.tab;
    const sc = tab.closest('.flow').dataset.scheme;
    if(which==='home'){
      if(sc==='s1'){ s1state.page='home'; s1state.fromFav=false; s1state.history=[]; renderS1(); }
      else if(sc==='s2'){ s2state.page='list'; renderS2(); }
    } else if(which==='chat'){
      openAiChat();
    } else if(which==='end'){
      flash('서비스를 종료합니다. 이용해 주셔서 감사합니다.');
    } else if(which==='voice'){
      showPopup();
    } else if(which==='agent'){
      flash('상담원을 연결합니다. 잠시만 기다려 주세요.');
    }
    return;
  }
});

/* 상단 시안 탭 */
document.getElementById('schemeTabs').addEventListener('click',(e)=>{
  const b = e.target.closest('[data-scheme]');
  if(b) switchScheme(b.dataset.scheme);
});

const SCHEME_META = {
  s1:{cap:'시안 1 · 메인 (그리드 + 메뉴 + 이벤트)', label:'화면 1 · 메인 (자주 찾는 서비스 → 메뉴 → 이벤트)',
      kpi:[['3.5초↓','메뉴 탐색 평균 시간'],['+38%p','핵심 메뉴 도달률'],['65%↓','음성 인입 콜 비중']]},
  dars1:{cap:'Ver 3.0 · 밝은 버전 디자인', label:'Ver 3.0 · 밝은 버전 디자인 · 단일 화면 내 뷰 전환',
      kpi:[['단일 화면','뷰 전환 인터랙션'],['아이콘','그리드 메인'],['Ver 3.0','밝은 버전']]},
  dars2:{cap:'Ver 1.2.1 · 큰 카드 + 인라인', label:'Ver 1.2.1 · 큰 카드 아코디언 · 인라인 펼침',
      kpi:[['큰 카드','아코디언 메인'],['인라인','화면전환 없는 결과'],['Ver 1.2.1','큰 카드']]},
  kiwoom:{cap:'키움증권 · 보이는 ARS (현행 ASIS)', label:'키움증권 현행 보이는 ARS · 메인 → 일반주문 → 현금매도',
      kpi:[['현행','ASIS 캡처'],['3단계','메인→일반주문→현금매도'],['참고','키움 보이는 ARS']]},
  samsung:{cap:'삼성증권 · 보이는 ARS (참고)', label:'삼성증권 보이는 ARS · 시세/투자정보 → 참고1·2·3 흐름',
      kpi:[['9분할','메인 그리드'],['3단계','시세/투자정보 탐색'],['참고','삼성증권 레퍼런스']]},
  mirae:{cap:'미래에셋증권 · 보이는 ARS (참고)', label:'미래에셋증권 보이는 ARS · 메인 (이후 플로우 추후 추가)',
      kpi:[['메인','캡쳐 화면'],['추후','플로우 추가 예정'],['참고','미래에셋증권 레퍼런스']]},
  nh:{cap:'NH투자증권 · 보이는 ARS (참고)', label:'NH투자증권 보이는 ARS · ARS 메뉴 → 계좌조회 → 확인',
      kpi:[['3단계','ARS메뉴→계좌조회→확인'],['단일','캡쳐 크롭'],['참고','NH투자증권 레퍼런스']]},
  hk:{cap:'한국투자증권 · 보이는 ARS (참고)', label:'한국투자증권 보이는 ARS · 주문·청약·펀드매매 → 현금매도',
      kpi:[['2단계','주문메뉴→현금매도'],['메인·메뉴','캡쳐'],['참고','한국투자증권 레퍼런스']]},
};

let refFirm = 'kiwoom';   // 참고 탭에서 현재 선택된 증권사 (기본: 키움증권 현행)
let sianScheme = 's1';    // 시안 탭에서 현재 선택된 시안 (s1=시안1 / dars1=시안2 / dars2=시안3)
let s1Ver = 'v40';        // 시안1 기본 버전 = Ver 4.0(v40). 맨 URL(파라미터 없음) 진입 시 메인을 Ver 4.0으로 표시. (타 버전은 QR ?v= 파라미터로 진입)
/* Ver 2.1 — 메인 3탭(셀프서비스/ARS메뉴/상담원연결)·드로어·favSrc 등 v21 전용 동작 게이트 */
function isV21Ver(){ return s1Ver==='v21'; }
function switchScheme(s){
  closeMenuDrawer();   // 탭/버전 전환 시 열려있던 전체메뉴 드로어 닫기
  scheme = s;
  const isRef  = (s==='ref');
  const isSian = (s==='sian');
  // 참고 모드면 선택 증권사 flow, 시안 모드면 선택 시안 flow를 표시
  const activeFlow = isRef ? refFirm : (isSian ? sianScheme : s);
  document.querySelectorAll('#schemeTabs .tab').forEach(t=>t.classList.toggle('active', t.dataset.scheme===s));
  document.querySelectorAll('.flow').forEach(f=>f.classList.toggle('active', f.dataset.scheme===activeFlow));
  // 폰 스테이지(시안1·참고) ↔ 시안2/3 덱 전환
  const isDarsView = (activeFlow==='dars1' || activeFlow==='dars2');
  const mainStage = document.getElementById('mainStage');
  if(mainStage) mainStage.style.display = isDarsView ? 'none' : '';
  document.querySelectorAll('.dars-deck').forEach(d=>d.classList.toggle('active', d.dataset.scheme===activeFlow));
  // 참고 사이드바 표시/항목 하이라이트
  const rl = document.getElementById('refList');
  if(rl){
    rl.classList.toggle('show', isRef);
    rl.querySelectorAll('.ref-item').forEach(it=>it.classList.toggle('on', it.dataset.reffirm===refFirm));
  }
  // 시안 사이드바 표시/항목 하이라이트 (시안1은 버전 V1.0/V2.0까지 구분)
  const snl = document.getElementById('sianList');
  if(snl){
    snl.classList.toggle('show', isSian);
    snl.querySelectorAll('.ref-item[data-sian]').forEach(it=>{
      const on = it.dataset.sian===sianScheme && (!it.dataset.ver || it.dataset.ver===s1Ver);
      it.classList.toggle('on', on);
    });
  }
  const meta = SCHEME_META[activeFlow] || SCHEME_META[s];
  updateSceneLabel();   // 씬 라벨은 사이드바 탭(편집 가능한 rf-nm/rf-tel)에서 동기화
  const kr = document.getElementById('kpiRow');
  if(kr && meta) kr.innerHTML = meta.kpi.map(k=>
    `<div class="k"><b>${k[0]}</b><span>${k[1]}</span></div>`).join('');
}
/* 현재 활성 스킴에 해당하는 좌측 패널 탭(.ref-item) */
function activeTabItem(){
  if(scheme==='ref'){
    const rl = document.getElementById('refList');
    return rl ? [...rl.querySelectorAll('.ref-item')].find(it=>it.dataset.reffirm===refFirm) : null;
  }
  const snl = document.getElementById('sianList');
  if(!snl) return null;
  return [...snl.querySelectorAll('.ref-item')].find(it=>
    (sianScheme==='s1') ? (it.dataset.sian==='s1' && it.dataset.ver===s1Ver)
                        : (it.dataset.sian===sianScheme)) || null;
}
/* 우측 패널: 활성 탭의 탭명/탭설명(2줄, 편집 반영) + 해당 버전 음성 시나리오 */
/* 버전별 음성 시나리오 기본 텍스트 */
const DEFAULT_SCENARIO = {
  v1:  '[Ver 1.0 · 디지털 ARS + 보이는 ARS]\n안녕하세요, 키움증권입니다.\n화면에서 자주 찾는 서비스와 보이는 ARS 메뉴를 직접 선택해 이용하실 수 있습니다.',
  v11: '[Ver 1.1 · 보이는 ARS 화면구현]\n안녕하세요, 키움증권입니다.\n새로워진 메인 화면에서 원하시는 서비스를 한눈에 선택해 주세요.',
  v2:  '[Ver 2.0 · 단순 ARS 메뉴연결]\n안녕하세요, 키움증권입니다.\n음성 ARS 순서 그대로 번호를 선택해 원하시는 메뉴로 이동하세요.',
  v21: '[Ver 2.1 · 보이는 ARS 화면구현 제외, 메인화면 및 전체메뉴 변경]\n안녕하세요, 키움증권입니다.\n셀프서비스 · ARS메뉴 · 상담원연결 탭에서 원하시는 업무를 선택해 주세요.',
  v40: '[Ver 4.0 · 토스 스타일 디지털 ARS]\n안녕하세요, 키움증권입니다.\n무엇을 도와드릴까요? 원하시는 음성 ARS 메뉴를 선택해 주세요.',
  dars1: '[Ver 3.0 · 밝은 버전 디자인]\n안녕하세요, 키움증권입니다.\n이용하실 서비스를 선택해 주세요.',
  dars2: '[Ver 1.2.1 · 큰 카드 + 인라인]\n안녕하세요, 키움증권입니다.\n큰 카드를 누르면 그 자리에서 바로 펼쳐지는 메뉴를 이용하세요.',
};
function loadScenario(key){
  try{ const m = JSON.parse(localStorage.getItem('darsScenarios_v3') || '{}'); if(m[key]!=null) return m[key]; }catch(_){}
  return DEFAULT_SCENARIO[key] || '안녕하세요, 키움증권입니다.\n원하시는 서비스를 선택해 주세요.\n\n(더블클릭하여 음성 시나리오를 입력하세요)';
}
function saveScenario(key, text){
  if(!key) return;
  try{ const m = JSON.parse(localStorage.getItem('darsScenarios_v3') || '{}'); m[key]=text; localStorage.setItem('darsScenarios_v3', JSON.stringify(m)); }catch(_){}
}
function updateSceneLabel(){
  const panel = document.getElementById('scenePanel'); if(!panel) return;
  const ai = activeTabItem();
  panel.classList.toggle('show', !!ai);
  if(!ai) return;
  const nm = (ai.querySelector('.rf-nm')?.textContent || '').trim();
  const tel = (ai.querySelector('.rf-tel')?.textContent || '').trim();
  const nmEl = document.getElementById('spName'), dcEl = document.getElementById('spDesc'), scEl = document.getElementById('spScenario');
  if(nmEl) nmEl.textContent = nm;
  if(dcEl) dcEl.textContent = tel;
  if(scEl && !scEl.isContentEditable) scEl.textContent = loadScenario(tabItemKey(ai));   // 편집 중 아니면 시나리오 갱신
  // 현재 버전 접속 QR (시안 탭에서만 · 버전별 이미지)
  const QR_MAP = {
    v1:['kiwoom-qr-ver1.0.png','Ver 1.0'], v11:['kiwoom-qr-ver1.1.png','Ver 1.1'],
    v2:['kiwoom-qr-ver2.0.png','Ver 2.0'], v21:['kiwoom-qr-ver2.1.png','Ver 2.1'],
    v40:['kiwoom-qr-v40.png','Ver 4.0'],
    dars1:['kiwoom-qr-ver3.0.png','Ver 3.0'], dars2:['kiwoom-qr-ver1.2.1.png','Ver 1.2.1']
  };
  const qrKey = (scheme!=='ref') ? ((sianScheme==='s1') ? s1Ver : sianScheme) : null;
  const qrWrap = document.getElementById('spQrWrap'), qrImg = document.getElementById('spQr'), qrCap = document.getElementById('spQrCap');
  if(qrWrap){
    if(qrKey && QR_MAP[qrKey]){
      if(qrImg) qrImg.src = QR_MAP[qrKey][0];
      if(qrCap) qrCap.textContent = '스캔 시 ' + QR_MAP[qrKey][1] + ' 화면으로 열립니다';
      qrWrap.classList.add('show');
    } else qrWrap.classList.remove('show');
  }
}
/* 참고 리스트: 증권사 선택 → 해당 목업 표시 */
function selectRefFirm(firm){ refFirm = firm; switchScheme('ref'); }
/* 시안 리스트: 시안 선택 → 해당 시안의 '메인(home) 화면'으로 띄움 (ver 지정 시 시안1 버전 전환) */
function selectSian(v, ver){
  sianScheme = v;
  if(v==='s1'){
    if(ver) s1Ver = ver;
    // 깊은 페이지에 있었어도 항상 메인(home)으로 초기화 + 인라인 탭/트리 상태 리셋
    closeMenuDrawer();
    s1state.page='home'; s1state.fromFav=false; s1state.noHome=false; s1state.noBack=false; s1state.history=[];
    s1state.v21Tab='self'; s1state.sarsPath=[]; s1state.amOpen=-1; s1state.amOpen2=-1;
    renderS1();
  } else if(v==='dars1'){ if(window.__darsHome1) window.__darsHome1(); }
  else if(v==='dars2'){ if(window.__darsHome2) window.__darsHome2(); }
  switchScheme('sian');
}
(function(){
  const rl = document.getElementById('refList');
  if(rl) rl.addEventListener('click', e=>{
    if(e.target.isContentEditable) return;          // 편집 중 클릭은 선택 무시
    const it = e.target.closest('[data-reffirm]');
    if(it) selectRefFirm(it.dataset.reffirm);
  });
  const snl = document.getElementById('sianList');
  if(snl) snl.addEventListener('click', e=>{
    if(e.target.isContentEditable) return;
    const it = e.target.closest('[data-sian]');
    if(it) selectSian(it.dataset.sian, it.dataset.ver);
  });
  // 좌측 패널 탭 드래그로 순서 변경 (HTML5 DnD) + 새로고침 후 순서 유지(localStorage)
  enableDragSort(snl, 'darsSianTabOrder_v2');
  enableDragSort(rl, 'darsRefTabOrder');
  // 더블클릭 시 탭명/설명 인라인 편집 + 저장
  enableTabEdit(snl, 'darsSianTabLabels_v3');   // 키 버전업: Ver명 개편(1.2→3.0) 후 옛 저장 라벨 무효화
  enableTabEdit(rl, 'darsRefTabLabels');
  // 우측 패널 시나리오 더블클릭 편집 (버전별 저장)
  const sc = document.getElementById('spScenario');
  if(sc){
    sc.addEventListener('dblclick', ()=>{
      if(sc.isContentEditable) return;
      sc.setAttribute('contenteditable','true'); sc.classList.add('editing');
      sc.focus(); placeCaretEnd(sc);
    });
    sc.addEventListener('blur', ()=>{
      if(!sc.isContentEditable) return;
      sc.removeAttribute('contenteditable'); sc.classList.remove('editing');
      const ai = activeTabItem();
      if(ai) saveScenario(tabItemKey(ai), sc.innerText.trim());
    });
    sc.addEventListener('keydown', e=>{ if(e.key==='Escape'){ e.preventDefault(); sc.blur(); } });
  }
  // 우측 패널 탭명/탭설명 더블클릭 편집 → 활성 탭(좌측 사이드바)에 반영 + 저장
  [document.getElementById('spName'), document.getElementById('spDesc')].forEach(el=>{
    if(!el) return;
    el.addEventListener('dblclick', ()=>{
      if(el.isContentEditable) return;
      el.setAttribute('contenteditable','true'); el.classList.add('editing');
      el.focus(); placeCaretEnd(el);
    });
    el.addEventListener('blur', ()=>{
      if(!el.isContentEditable) return;
      el.removeAttribute('contenteditable'); el.classList.remove('editing');
      applyScenePanelEdit();
    });
    el.addEventListener('keydown', e=>{
      if(e.key==='Escape'){ e.preventDefault(); el.blur(); return; }
      // 탭명(spName)=Enter로 편집 완료 / 탭설명(spDesc)=Enter 줄바꿈 허용(시나리오 입력창처럼)
      if(e.key==='Enter' && el.id!=='spDesc'){ e.preventDefault(); el.blur(); }
    });
  });
})();
/* 우측 패널에서 편집한 탭명/탭설명을 활성 탭(.ref-item rf-nm/rf-tel)에 반영 + localStorage 저장 */
function applyScenePanelEdit(){
  const ai = activeTabItem(); if(!ai) return;
  const nm = (document.getElementById('spName')?.textContent || '').trim();
  const tel = (document.getElementById('spDesc')?.innerText || '').trim();
  const nmEl = ai.querySelector('.rf-nm'), telEl = ai.querySelector('.rf-tel');
  if(nmEl) nmEl.textContent = nm;
  if(telEl) telEl.textContent = tel;
  const list = ai.closest('.ref-list');
  if(list) saveTabLabels(list, list.id==='refList' ? 'darsRefTabLabels' : 'darsSianTabLabels_v3');
}
/* 좌측 패널 탭 더블클릭 → 탭명/설명 인라인 편집(저장: localStorage) */
function enableTabEdit(list, labelKey){
  if(!list) return;
  restoreTabLabels(list, labelKey);   // 저장된 탭명/설명 복원 (편집은 우측 패널에서)
}
function placeCaretEnd(el){
  try{ const r=document.createRange(); r.selectNodeContents(el); r.collapse(false);
    const s=getSelection(); s.removeAllRanges(); s.addRange(r); }catch(_){}
}
function startTabEdit(it, list, labelKey){
  it.classList.add('editing');
  it.setAttribute('draggable','false');
  const nm = it.querySelector('.rf-nm'), tel = it.querySelector('.rf-tel');
  [nm,tel].forEach(el=>{ if(el) el.setAttribute('contenteditable','true'); });
  if(nm){ nm.focus(); placeCaretEnd(nm); }
  function finish(){
    [nm,tel].forEach(el=>{ if(el) el.removeAttribute('contenteditable'); });
    it.classList.remove('editing');
    it.setAttribute('draggable','true');
    saveTabLabels(list, labelKey);
    updateSceneLabel();          // 활성 탭을 편집했으면 씬 라벨도 즉시 동기화
    it.removeEventListener('focusout', onOut);
    it.removeEventListener('keydown', onKey);
  }
  function onOut(){ setTimeout(()=>{ if(!it.contains(document.activeElement)) finish(); }, 0); }
  function onKey(ev){
    if(ev.key==='Enter'){ ev.preventDefault();
      if(document.activeElement===nm && tel){ tel.focus(); placeCaretEnd(tel); } else finish(); }
    else if(ev.key==='Escape'){ ev.preventDefault(); finish(); }
  }
  it.addEventListener('focusout', onOut);
  it.addEventListener('keydown', onKey);
}
function saveTabLabels(list, labelKey){
  try{
    const map = JSON.parse(localStorage.getItem(labelKey) || '{}');
    list.querySelectorAll('.ref-item').forEach(it=>{
      const k = tabItemKey(it); if(!k) return;
      const nm = it.querySelector('.rf-nm'), tel = it.querySelector('.rf-tel');
      map[k] = { nm: nm ? nm.textContent.trim() : '', tel: tel ? tel.textContent.trim() : '' };
    });
    localStorage.setItem(labelKey, JSON.stringify(map));
  }catch(_){}
}
function restoreTabLabels(list, labelKey){
  let map; try{ map = JSON.parse(localStorage.getItem(labelKey) || 'null'); }catch(_){ return; }
  if(!map) return;
  list.querySelectorAll('.ref-item').forEach(it=>{
    const saved = map[tabItemKey(it)]; if(!saved) return;
    const nm = it.querySelector('.rf-nm'), tel = it.querySelector('.rf-tel');
    if(nm && saved.nm) nm.textContent = saved.nm;
    if(tel && saved.tel != null) tel.textContent = saved.tel;
  });
}
/* .ref-item 고유키 (시안 버전/시안2·3/참고 증권사) */
function tabItemKey(it){ return it.dataset.ver || it.dataset.sian || it.dataset.reffirm || ''; }
/* 저장된 순서대로 DOM 재배치 */
function restoreTabOrder(list, storeKey){
  if(!list || !storeKey) return;
  let saved; try{ saved = JSON.parse(localStorage.getItem(storeKey) || 'null'); }catch(_){ return; }
  if(!Array.isArray(saved) || !saved.length) return;
  const byKey = {};
  list.querySelectorAll('.ref-item').forEach(it=> byKey[tabItemKey(it)] = it);
  const anchor = list.querySelector('.func-title');   // '시연·기능' 섹션은 항상 맨 아래 유지
  saved.forEach(k=>{ if(byKey[k]){ anchor ? list.insertBefore(byKey[k], anchor) : list.appendChild(byKey[k]); } });
}
/* 현재 순서를 저장 */
function saveTabOrder(list, storeKey){
  if(!list || !storeKey) return;
  try{
    const order = [...list.querySelectorAll('.ref-item')].map(tabItemKey);
    localStorage.setItem(storeKey, JSON.stringify(order));
  }catch(_){}
}
/* .ref-item 들을 드래그로 재배치 */
function enableDragSort(list, storeKey){
  if(!list) return;
  restoreTabOrder(list, storeKey);   // 새로고침 시 저장된 순서 복원
  let dragEl = null;
  list.querySelectorAll('.ref-item').forEach(it=> it.setAttribute('draggable','true'));
  function afterEl(y){
    return [...list.querySelectorAll('.ref-item:not(.dragging)')].reduce((closest, child)=>{
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height/2;
      if(offset < 0 && offset > closest.offset) return {offset, element:child};
      return closest;
    }, {offset:-Infinity, element:null}).element;
  }
  list.addEventListener('dragstart', e=>{
    const it = e.target.closest('.ref-item'); if(!it) return;
    dragEl = it; it.classList.add('dragging');
    if(e.dataTransfer){ e.dataTransfer.effectAllowed='move'; try{ e.dataTransfer.setData('text/plain',''); }catch(_){}}
  });
  list.addEventListener('dragend', ()=>{
    if(dragEl){ dragEl.classList.remove('dragging'); dragEl=null; saveTabOrder(list, storeKey); }   // 변경된 순서 저장
  });
  list.addEventListener('dragover', e=>{
    if(!dragEl) return;
    e.preventDefault();
    const ref = afterEl(e.clientY);
    if(ref==null){ const anchor = list.querySelector('.func-title'); anchor ? list.insertBefore(dragEl, anchor) : list.appendChild(dragEl); }
    else if(ref!==dragEl) list.insertBefore(dragEl, ref);
  });
}

/* 토스트 */
let toastT;
function flash(msg){
  let el = document.getElementById('toast');
  if(!el){ el=document.createElement('div'); el.id='toast';
    el.style.cssText='position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:rgba(20,12,40,.95);color:#fff;padding:13px 22px;border-radius:14px;font-size:14px;font-weight:600;z-index:999;box-shadow:0 10px 30px rgba(0,0,0,.4);transition:.25s;border:1px solid rgba(255,255,255,.15)';
    document.body.appendChild(el); }
  el.textContent=msg; el.style.opacity='1';
  clearTimeout(toastT); toastT=setTimeout(()=>el.style.opacity='0',2200);
}

/* 초기화 */
rerender();
switchScheme('sian');

/* URL 파라미터로 초기 버전 지정 (모바일 데모용): index.html?v=dars1(=Ver3.0) / ?v=v30 / ?v=v21 등 */
(function(){
  try{
    var raw = (new URLSearchParams(location.search).get('v') || new URLSearchParams(location.search).get('ver') || '').trim().toLowerCase();
    if(!raw) return;
    var MAP = {
      'v1':['s1','v1'],'1.0':['s1','v1'],
      'v11':['s1','v11'],'1.1':['s1','v11'],
      'v2':['s1','v2'],'2.0':['s1','v2'],
      'v21':['s1','v21'],'2.1':['s1','v21'],
      'v40':['s1','v40'],'4.0':['s1','v40'],'v4':['s1','v40'],
      'dars1':['dars1'],'3.0':['dars1'],'v3':['dars1'],'v30':['dars1'],
      'dars2':['dars2'],'1.2.1':['dars2'],'s3':['dars2']
    };
    var sel = MAP[raw];
    if(sel) selectSian(sel[0], sel[1]);
  }catch(e){}
})();
