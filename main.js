const state = {
  mode: "app",
  role: "broker",
  screen: "home",
};

const products = {
  broker: {
    label: "중개인 앱",
    shortLabel: "중개인",
    heroTitle: "현장 배치, 긴급 호출, 정산을 한 손에 묶는 운영 중심 앱",
    heroDescription:
      "중개인이 여러 현장을 동시에 돌리면서 부족 인원, 출근 상태, 단골 인력, 긴급 요청과 수수료 수익까지 빠르게 제어할 수 있도록 설계한 핵심 제품입니다.",
    metrics: [
      ["오늘 부족 인원", "12명"],
      ["배치 완료율", "86%"],
      ["이번주 수수료", "₩2.4M"],
    ],
    menu: ["홈", "현장관리", "인력관리", "매칭요청", "정산", "채팅", "설정"],
    mvp: ["인력 요청", "인력 리스트", "출근 체크", "자동 추천 매칭"],
    screens: {
      home: {
        title: "홈 화면",
        goals: [
          "오늘 현장과 부족 인원을 한눈에 파악",
          "긴급 호출과 인력 요청을 첫 화면에서 바로 실행",
          "현장 우선순위를 색상과 수치로 빠르게 판단",
        ],
        actions: ["인력 요청", "긴급 호출", "현장 상세 보기", "미출근 인원 확인"],
      },
      sites: {
        title: "현장 관리",
        goals: [
          "현장별 배치 인력과 출근 현황을 묶어서 관리",
          "공종별 인원 분포와 결원 상태를 즉시 확인",
          "인력 추가와 교체를 현장 상세 안에서 바로 처리",
        ],
        actions: ["인력 추가", "인력 교체", "공종별 현황 보기", "출근 상태 갱신"],
      },
      request: {
        title: "인력 요청",
        goals: [
          "날짜, 공종, 인원, 위치를 짧은 흐름으로 입력",
          "자주 쓰는 공종과 현장을 빠르게 선택",
          "자동 추천으로 응답 속도를 줄임",
        ],
        actions: ["날짜 선택", "공종 선택", "자동 추천 받기", "긴급 요청 발행"],
      },
      workers: {
        title: "인력 관리",
        goals: [
          "단골 인력과 신규 인력을 CRM처럼 관리",
          "출근률, 평점, 리뷰와 태그로 기억을 데이터화",
          "배치 가능성과 리스크를 빠르게 판단",
        ],
        actions: ["단골 등록", "태그 수정", "평점 확인", "재호출"],
      },
      settlement: {
        title: "정산",
        goals: [
          "중개 수익과 인력 지급액을 자동 계산",
          "오늘, 이번주, 월간 단위로 흐름 확인",
          "현장별 수수료 수익을 비교",
        ],
        actions: ["일별 정산 확인", "인력별 지급액 보기", "수수료 계산", "정산 내보내기"],
      },
    },
  },
  worker: {
    label: "노동자 앱",
    shortLabel: "노동자",
    heroTitle: "일자리 검색, 지원, 출근 인증을 최소 단계로 끝내는 초간단 앱",
    heroDescription:
      "노동자 제품은 빠른 지원과 명확한 보상 정보가 핵심입니다. 복잡한 관리 기능을 덜어내고 오늘 일자리를 찾고 출근 체크하는 데 필요한 흐름만 남겼습니다.",
    metrics: [
      ["오늘 추천 일자리", "8건"],
      ["예정 수익", "₩520K"],
      ["이번달 출근률", "97%"],
    ],
    menu: ["일자리", "내 일정", "출근체크", "수익", "프로필"],
    mvp: ["일자리 보기", "지원", "출근 체크", "수익 확인"],
    screens: {
      jobs: {
        title: "일자리 화면",
        goals: [
          "날짜, 위치, 공종, 일당을 바로 비교",
          "지원 버튼을 크게 배치해 판단 시간을 줄임",
          "좋은 조건의 공고를 먼저 보여줌",
        ],
        actions: ["지원하기", "상세 보기", "즐겨찾기", "조건 필터링"],
      },
      schedule: {
        title: "내 일정",
        goals: [
          "확정된 일정과 대기 중 지원을 함께 관리",
          "출근 시간과 현장 위치를 놓치지 않게 안내",
          "반복 일정을 쉽게 확인",
        ],
        actions: ["일정 확인", "현장 위치 열기", "배정 상태 확인"],
      },
      attendance: {
        title: "출근 체크",
        goals: [
          "GPS와 사진 인증으로 출퇴근 증빙",
          "버튼 두 개로 출근과 퇴근을 끝냄",
          "현장 도착 여부를 중개인과 실시간 공유",
        ],
        actions: ["출근", "퇴근", "사진 인증", "위치 확인"],
      },
      earnings: {
        title: "수익",
        goals: [
          "오늘 수익과 누적 수익을 명확하게 표시",
          "지급 예정 금액과 지급 완료 내역 구분",
          "주간 단위로 수입 흐름을 보여줌",
        ],
        actions: ["오늘 수익 보기", "지급 예정 확인", "정산 내역 열기"],
      },
      profile: {
        title: "프로필",
        goals: [
          "평점과 경력, 공종 전문성을 신뢰 데이터로 노출",
          "리뷰와 인증 정보를 통해 배치 확률 향상",
          "노동자 본인이 정보를 쉽게 갱신",
        ],
        actions: ["경력 수정", "공종 태그 수정", "리뷰 확인"],
      },
    },
  },
  admin: {
    label: "관리자 웹",
    shortLabel: "관리자",
    heroTitle: "운영자용 통합 대시보드로 거래, 리스크, 수수료 흐름을 관리하는 백오피스",
    heroDescription:
      "관리자 웹은 플랫폼 전체 운영을 위한 제품입니다. 중개인 활동량, 현장 수요, 노동자 출근 이슈, 수수료 흐름과 CS 대응을 한 화면 체계 안에서 관리합니다.",
    metrics: [
      ["활성 중개인", "148명"],
      ["오늘 거래 요청", "1,240건"],
      ["리스크 알림", "17건"],
    ],
    menu: ["대시보드", "중개인 관리", "노동자 관리", "현장 수요", "정산/수수료", "CS", "설정"],
    mvp: ["운영 대시보드", "사용자 관리", "정산 검수", "리스크 모니터링"],
    screens: {
      dashboard: {
        title: "운영 대시보드",
        goals: [
          "플랫폼 핵심 KPI를 실시간으로 집계",
          "리스크와 지연 이슈를 먼저 보이게 구성",
          "중개인/노동자 활동량을 빠르게 점검",
        ],
        actions: ["이상 징후 확인", "수요 추세 보기", "운영 알림 처리"],
      },
      brokerOps: {
        title: "중개인 관리",
        goals: [
          "상위 중개인 성과와 문제 계정을 관리",
          "배치 성공률과 취소율을 비교",
          "지역별 성과를 기준으로 세일즈 운영",
        ],
        actions: ["중개인 상세 보기", "계정 상태 변경", "성과 비교"],
      },
      laborOps: {
        title: "노동자 관리",
        goals: [
          "평점, 신고, 출근률, 인증 상태를 관리",
          "활동 정지와 검수 처리를 빠르게 수행",
          "핵심 기능은 단순하지만 운영 검수는 엄격하게 유지",
        ],
        actions: ["인증 검수", "리뷰 신고 처리", "활동 제한"],
      },
      finance: {
        title: "정산 / 수수료",
        goals: [
          "플랫폼 수익과 지급 흐름을 분리해 확인",
          "정산 누락, 과지급, 미지급을 탐지",
          "회계팀이 바로 사용할 수 있는 구조로 제공",
        ],
        actions: ["정산 검수", "수수료 추적", "다운로드"],
      },
    },
  },
};

const platformModes = [
  { id: "app", label: "앱 버전" },
  { id: "web", label: "웹 버전" },
];

const roleOrder = [
  { id: "broker", label: "중개인 앱" },
  { id: "worker", label: "노동자 앱" },
  { id: "admin", label: "관리자 웹" },
];

const screenDefaults = {
  broker: "home",
  worker: "jobs",
  admin: "dashboard",
};

function $(id) {
  return document.getElementById(id);
}

function createButtons(container, items, activeId, onClick, className = "segment-btn") {
  container.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    button.className = className + (item.id === activeId ? " active" : "");
    button.textContent = item.label;
    button.addEventListener("click", () => onClick(item.id));
    container.appendChild(button);
  });
}

function renderHero(product) {
  $("heroTitle").textContent = product.heroTitle;
  $("heroDescription").textContent = product.heroDescription;
  $("heroMetrics").innerHTML = product.metrics
    .map(
      ([label, value]) => `
        <article class="metric">
          <span class="eyebrow">${label}</span>
          <strong>${value}</strong>
        </article>
      `
    )
    .join("");
  $("mvpCard").innerHTML = `
    <p class="eyebrow">MVP</p>
    <div class="list-stack">
      ${product.mvp.map((item) => `<div class="mvp-list">${item}</div>`).join("")}
    </div>
  `;
}

function renderDetails(product, screen) {
  $("productLabel").textContent = `${product.label} / ${state.mode === "app" ? "App UX" : "Web UX"}`;
  $("screenTitle").textContent = screen.title;
  $("menuList").innerHTML = product.menu
    .map((item) => `<div class="menu-pill">${item}</div>`)
    .join("");
  $("goalList").innerHTML = screen.goals
    .map((item) => `<div class="goal-item">${item}</div>`)
    .join("");
  $("actionList").innerHTML = screen.actions
    .map((item) => `<div class="action-item">${item}</div>`)
    .join("");
}

function mobileShell(content) {
  return `<div class="mobile-screen">${content}</div>`;
}

function buildBrokerScreen(screenId, mode) {
  const head = `
    <div class="screen-header">
      <div>
        <p class="eyebrow">03월 30일 월요일</p>
        <h4>동남권 현장 운영</h4>
        <p class="muted">부족 인원과 출근 이슈를 우선 처리하는 중개인 워크플로우</p>
      </div>
      <span class="badge danger">미출근 4명</span>
    </div>
  `;

  const home = `
    ${head}
    <div class="card-grid">
      <div class="mini-stat"><span class="eyebrow">오늘 현장</span><strong>6개</strong></div>
      <div class="mini-stat"><span class="eyebrow">부족 인원</span><strong class="emphasis">12명</strong></div>
      <div class="mini-stat"><span class="eyebrow">긴급 요청</span><strong>3건</strong></div>
    </div>
    <div class="cta-row" style="margin:16px 0;">
      <button class="cta">+ 인력 요청</button>
      <button class="cta secondary">긴급 호출</button>
    </div>
    <div class="panel">
      <h5>오늘 현장 리스트</h5>
      <div class="list-item"><div><strong>성수 A동 마감</strong><div class="muted">타일 5 / 목공 3 / 전기 2</div></div><span class="badge danger">2명 부족</span></div>
      <div class="list-item"><div><strong>마곡 오피스 리모델링</strong><div class="muted">출근 11명 완료</div></div><span class="badge primary">정상</span></div>
      <div class="list-item"><div><strong>판교 데이터센터</strong><div class="muted">철야조 인력 보강 필요</div></div><span class="badge accent">긴급</span></div>
    </div>
  `;

  const sites = `
    ${head}
    <div class="panel">
      <h5>현장별 배치 현황</h5>
      <div class="list-item"><div><strong>성수 A동 마감</strong><div class="muted">배치 18명 / 출근 16명 / 타일 6명</div></div><span class="badge danger">교체 필요</span></div>
      <div class="list-item"><div><strong>광명 물류센터 증축</strong><div class="muted">배치 22명 / 출근 22명 / 전기 7명</div></div><span class="badge primary">안정</span></div>
      <div class="list-item"><div><strong>동탄 상가 인테리어</strong><div class="muted">배치 9명 / 출근 8명 / 목공 4명</div></div><span class="badge accent">1명 부족</span></div>
    </div>
    <div class="cta-row" style="margin-top:16px;">
      <button class="cta">인력 추가</button>
      <button class="cta ghost">인력 교체</button>
    </div>
  `;

  const request = `
    ${head}
    <div class="panel">
      <h5>인력 요청 만들기</h5>
      <div class="card-grid">
        <div class="info-card"><span class="eyebrow">날짜</span><strong>04/01</strong></div>
        <div class="info-card"><span class="eyebrow">공종</span><strong>타일</strong></div>
        <div class="info-card"><span class="eyebrow">인원</span><strong>5명</strong></div>
        <div class="info-card"><span class="eyebrow">위치</span><strong>성수동 자동설정</strong></div>
      </div>
      <div class="tag-row" style="margin:16px 0;">
        <span class="tag primary">타일</span>
        <span class="tag primary">목공</span>
        <span class="tag primary">전기</span>
        <span class="tag accent">야간</span>
      </div>
      <button class="cta secondary" style="width:100%;">자동 추천 받기</button>
    </div>
  `;

  const workers = `
    ${head}
    <div class="panel">
      <h5>인력 CRM</h5>
      <div class="list-item"><div><strong>김준호</strong><div class="muted">타일 8년차 · 출근률 98%</div></div><div class="tag-row"><span class="tag primary">잘함</span><span class="tag accent">단골</span></div></div>
      <div class="list-item"><div><strong>박민수</strong><div class="muted">목공 5년차 · 출근률 91%</div></div><div class="tag-row"><span class="tag primary">속도 빠름</span></div></div>
      <div class="list-item"><div><strong>이영태</strong><div class="muted">전기 3년차 · 출근률 72%</div></div><div class="tag-row"><span class="tag danger">지각 많음</span></div></div>
    </div>
  `;

  const settlement = `
    ${head}
    <div class="card-grid">
      <div class="payment-card"><span class="eyebrow">오늘 수익</span><strong>₩460,000</strong></div>
      <div class="payment-card"><span class="eyebrow">이번주 수익</span><strong>₩2,400,000</strong></div>
      <div class="payment-card"><span class="eyebrow">지급 예정</span><strong>₩5,820,000</strong></div>
    </div>
    <div class="panel" style="margin-top:16px;">
      <h5>인력별 지급 금액</h5>
      <div class="list-item"><div><strong>김준호</strong><div class="muted">성수 A동 마감 / 타일</div></div><strong>₩230,000</strong></div>
      <div class="list-item"><div><strong>박민수</strong><div class="muted">동탄 상가 인테리어 / 목공</div></div><strong>₩210,000</strong></div>
      <div class="list-item"><div><strong>플랫폼 수수료</strong><div class="muted">오늘 누적</div></div><strong>₩68,000</strong></div>
    </div>
  `;

  const screens = { home, sites, request, workers, settlement };
  const content = screens[screenId] || home;

  if (mode === "app") return mobileShell(content);
  return `
    <div class="web-screen">
      <aside class="web-sidebar">
        <p class="eyebrow">Broker Ops</p>
        ${products.broker.menu.map((item) => `<div class="menu-pill" style="margin-bottom:10px;background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.12);color:#fff;">${item}</div>`).join("")}
      </aside>
      <div class="web-main">${content}</div>
    </div>
  `;
}

function buildWorkerScreen(screenId, mode) {
  const head = `
    <div class="screen-header">
      <div>
        <p class="eyebrow">오늘 추천</p>
        <h4>빠른 지원 흐름</h4>
        <p class="muted">일자리 선택과 출근 체크에만 집중한 단순 UX</p>
      </div>
      <span class="badge primary">골드 등급</span>
    </div>
  `;

  const jobs = `
    ${head}
    <div class="job-card">
      <span class="eyebrow">04/01 · 성수동</span>
      <strong>타일 보조 3명</strong>
      <p class="muted">07:00 시작 · 일당 ₩220,000 · 중식 제공</p>
      <div class="cta-row">
        <button class="cta" style="flex:1;">지원하기</button>
        <button class="cta ghost">상세</button>
      </div>
    </div>
    <div class="job-card" style="margin-top:12px;">
      <span class="eyebrow">04/01 · 판교</span>
      <strong>전기 작업 2명</strong>
      <p class="muted">08:00 시작 · 일당 ₩250,000 · 야간 가능</p>
      <div class="badge-row"><span class="badge accent">고단가</span><span class="badge primary">경력 우대</span></div>
    </div>
  `;

  const schedule = `
    ${head}
    <div class="panel">
      <h5>내 일정</h5>
      <div class="list-item"><div><strong>04/01 성수 A동</strong><div class="muted">확정 · 06:40 집결</div></div><span class="badge primary">확정</span></div>
      <div class="list-item"><div><strong>04/02 동탄 상가</strong><div class="muted">지원 완료 · 응답 대기</div></div><span class="badge accent">대기</span></div>
      <div class="list-item"><div><strong>04/03 마곡 오피스</strong><div class="muted">반복 일정</div></div><span class="badge primary">예정</span></div>
    </div>
  `;

  const attendance = `
    ${head}
    <div class="panel">
      <h5>출근 체크</h5>
      <div class="card-grid">
        <div class="info-card"><span class="eyebrow">GPS</span><strong>현장 반경 40m</strong></div>
        <div class="info-card"><span class="eyebrow">사진 인증</span><strong>준비 완료</strong></div>
      </div>
      <div class="cta-row" style="margin-top:16px;">
        <button class="cta secondary" style="flex:1;">출근</button>
        <button class="cta" style="flex:1;">퇴근</button>
      </div>
    </div>
  `;

  const earnings = `
    ${head}
    <div class="card-grid">
      <div class="mini-stat"><span class="eyebrow">오늘 수익</span><strong>₩220,000</strong></div>
      <div class="mini-stat"><span class="eyebrow">누적 수익</span><strong>₩3,840,000</strong></div>
      <div class="mini-stat"><span class="eyebrow">지급 예정</span><strong>₩520,000</strong></div>
    </div>
    <div class="panel" style="margin-top:16px;">
      <h5>최근 정산</h5>
      <div class="list-item"><div><strong>성수 A동</strong><div class="muted">타일 보조</div></div><strong>₩220,000</strong></div>
      <div class="list-item"><div><strong>판교 데이터센터</strong><div class="muted">전기 작업</div></div><strong>₩250,000</strong></div>
    </div>
  `;

  const profile = `
    ${head}
    <div class="panel">
      <h5>프로필</h5>
      <div class="card-grid">
        <div class="worker-card"><span class="eyebrow">평점</span><strong>4.8 / 5</strong></div>
        <div class="worker-card"><span class="eyebrow">경력</span><strong>타일 6년</strong></div>
        <div class="worker-card"><span class="eyebrow">전문 공종</span><strong>타일 · 방수</strong></div>
      </div>
      <div class="tag-row" style="margin-top:16px;">
        <span class="tag primary">성실함</span>
        <span class="tag primary">속도 빠름</span>
        <span class="tag accent">재호출 많음</span>
      </div>
    </div>
  `;

  const screens = { jobs, schedule, attendance, earnings, profile };
  const content = screens[screenId] || jobs;

  if (mode === "app") return mobileShell(content);
  return `
    <div class="web-screen">
      <aside class="web-sidebar">
        <p class="eyebrow">Worker Service</p>
        ${products.worker.menu.map((item) => `<div class="menu-pill" style="margin-bottom:10px;background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.12);color:#fff;">${item}</div>`).join("")}
      </aside>
      <div class="web-main">${content}</div>
    </div>
  `;
}

function buildAdminScreen(screenId, mode) {
  const head = `
    <div class="screen-header">
      <div>
        <p class="eyebrow">Admin Control</p>
        <h4>플랫폼 운영 대시보드</h4>
        <p class="muted">거래량, 사용자, 리스크, 정산을 다루는 백오피스 구조</p>
      </div>
      <span class="badge accent">알림 17건</span>
    </div>
  `;

  const dashboard = `
    ${head}
    <div class="card-grid">
      <div class="admin-card"><span class="eyebrow">총 요청</span><strong>1,240</strong></div>
      <div class="admin-card"><span class="eyebrow">성사율</span><strong>78%</strong></div>
      <div class="admin-card"><span class="eyebrow">취소율</span><strong>6.2%</strong></div>
      <div class="admin-card"><span class="eyebrow">리스크</span><strong class="emphasis">17건</strong></div>
    </div>
    <div class="panel" style="margin-top:16px;">
      <h5>실시간 운영 이슈</h5>
      <div class="list-item"><div><strong>서울 동부권</strong><div class="muted">타일 인력 수요 급증</div></div><span class="badge danger">공급 부족</span></div>
      <div class="list-item"><div><strong>신규 중개인 12명</strong><div class="muted">본인 인증 대기</div></div><span class="badge accent">검수 필요</span></div>
      <div class="list-item"><div><strong>정산 지연 3건</strong><div class="muted">회계 검토 필요</div></div><span class="badge primary">처리중</span></div>
    </div>
  `;

  const brokerOps = `
    ${head}
    <div class="panel">
      <h5>중개인 운영 현황</h5>
      <div class="list-item"><div><strong>김영수 중개사</strong><div class="muted">성사율 92% · 수도권 남부</div></div><span class="badge primary">우수</span></div>
      <div class="list-item"><div><strong>박현민 중개사</strong><div class="muted">취소율 14% · 교육 필요</div></div><span class="badge danger">주의</span></div>
      <div class="list-item"><div><strong>정다운 중개사</strong><div class="muted">신규 가입 3일차</div></div><span class="badge accent">온보딩</span></div>
    </div>
  `;

  const laborOps = `
    ${head}
    <div class="panel">
      <h5>노동자 검수</h5>
      <div class="list-item"><div><strong>사진 인증 실패 5건</strong><div class="muted">재검수 필요</div></div><span class="badge danger">긴급</span></div>
      <div class="list-item"><div><strong>신규 고평점 24명</strong><div class="muted">추천 풀 편입 후보</div></div><span class="badge primary">확인</span></div>
      <div class="list-item"><div><strong>리뷰 신고 9건</strong><div class="muted">운영팀 확인 필요</div></div><span class="badge accent">대기</span></div>
    </div>
  `;

  const finance = `
    ${head}
    <div class="card-grid">
      <div class="admin-card"><span class="eyebrow">오늘 수수료</span><strong>₩8.9M</strong></div>
      <div class="admin-card"><span class="eyebrow">미정산</span><strong>₩1.2M</strong></div>
      <div class="admin-card"><span class="eyebrow">환불 요청</span><strong>11건</strong></div>
    </div>
    <div class="panel" style="margin-top:16px;">
      <h5>정산 검수 항목</h5>
      <div class="list-item"><div><strong>과지급 의심</strong><div class="muted">광명 물류센터 / 2건</div></div><span class="badge danger">검토</span></div>
      <div class="list-item"><div><strong>지급 예정</strong><div class="muted">오늘 18:00 배치</div></div><span class="badge primary">정상</span></div>
    </div>
  `;

  const screens = { dashboard, brokerOps, laborOps, finance };
  const content = screens[screenId] || dashboard;

  if (mode === "app") {
    return mobileShell(`
      <div class="panel" style="margin-bottom:16px;">
        <span class="badge accent">관리자 앱 요약</span>
        <p class="muted">관리자 기능은 웹이 주력이지만, 앱 버전에서는 KPI 확인과 긴급 승인 처리만 가능하게 설계했습니다.</p>
      </div>
      ${content}
    `);
  }

  return `
    <div class="web-screen">
      <aside class="web-sidebar">
        <p class="eyebrow">Admin Web</p>
        ${products.admin.menu.map((item) => `<div class="menu-pill" style="margin-bottom:10px;background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.12);color:#fff;">${item}</div>`).join("")}
      </aside>
      <div class="web-main">${content}</div>
    </div>
  `;
}

function renderDevice(product, screenId) {
  const frame = $("deviceFrame");
  const deviceLabel = state.mode === "app" ? `${product.shortLabel} App` : `${product.shortLabel} Web`;
  $("deviceLabel").textContent = deviceLabel;
  frame.classList.toggle("web", state.mode === "web");

  let html = "";
  if (state.role === "broker") html = buildBrokerScreen(screenId, state.mode);
  if (state.role === "worker") html = buildWorkerScreen(screenId, state.mode);
  if (state.role === "admin") html = buildAdminScreen(screenId, state.mode);
  $("deviceScreen").innerHTML = html;
}

function render() {
  const product = products[state.role];
  const screen = product.screens[state.screen];

  createButtons(
    $("platformMode"),
    platformModes,
    state.mode,
    (id) => {
      state.mode = id;
      render();
    }
  );

  createButtons(
    $("productType"),
    [
      { id: "all", label: "3개 제품 구조" },
      { id: "focused", label: "현재 제품 집중" },
    ],
    "focused",
    () => {}
  );

  createButtons(
    $("roleTabs"),
    roleOrder,
    state.role,
    (id) => {
      state.role = id;
      state.screen = screenDefaults[id];
      render();
    },
    "role-btn"
  );

  const screenItems = Object.entries(product.screens).map(([id, data]) => ({
    id,
    label: data.title,
  }));
  createButtons(
    $("screenTabs"),
    screenItems,
    state.screen,
    (id) => {
      state.screen = id;
      render();
    },
    "screen-btn"
  );

  renderHero(product);
  renderDetails(product, screen);
  renderDevice(product, state.screen);
}

render();
