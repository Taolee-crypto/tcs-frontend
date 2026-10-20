import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams, Navigate } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Globe2, Menu, X, ShieldCheck, Music2, Wallet,
  Landmark, Network, FileMusic, ChartNoAxesCombined, Users, LockKeyhole,
  RadioTower, Scale, BadgeCheck
} from 'lucide-react'

type Language = 'KR' | 'EN'

const nav = [
  { label: 'HOME', en: 'HOME', to: '/' },
  { label: '저작권 관리 안내', en: 'Copyright', to: '/copyright' },
  { label: '회원 가입 안내', en: 'Membership', to: '/membership' },
  { label: '유통사 및 음악 이용사업자', en: 'Business', to: '/business' },
  { label: '저작권 금융', en: 'Copyright Finance', to: '/finance' },
  { label: 'GLOBAL', en: 'GLOBAL', to: '/global' },
  { label: '고객지원', en: 'Support', to: '/support' },
]
const portals = [
  { icon: Users, title: '창작자 포털', en: 'Creator Portal', desc: '나의 저작물과 권리, 이용내역 및 저작권료를 확인합니다.', to: '/portal/creator', tag: 'FOR CREATORS' },
  { icon: Landmark, title: '협회 관리자', en: 'Association Portal', desc: '회원·신탁·권리·징수·분배 업무를 관리합니다.', to: '/portal/association', tag: 'FOR ASSOCIATIONS' },
  { icon: Network, title: '유통사·이용사업자', en: 'Business Portal', desc: '독립 플랫폼의 저작물 및 음악 사용정보를 연동합니다.', to: '/portal/partner', tag: 'FOR PARTNERS' },
  { icon: Wallet, title: '금융기관 포털', en: 'Finance Portal', desc: '동의 기반 저작권 수입 확인과 금융 업무를 연결합니다.', to: '/portal/finance', tag: 'FOR FINANCIAL INSTITUTIONS' },
  { icon: Globe2, title: '글로벌 네트워크', en: 'Global Network', desc: '국가별 관리단체와 국제 협력 및 해외 정산을 연결합니다.', to: '/portal/global', tag: 'FOR GLOBAL PARTNERS' },
]

function Shell({ children, language, setLanguage }: { children: React.ReactNode; language: Language; setLanguage: (v: Language) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isKr = language === 'KR'
  return <div className="site-shell">
    <header className="topbar">
      <Link className="brand" to="/" aria-label="TCS Home" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark"><Music2 size={22}/></span>
        <span className="brand-word">TCS<span className="brand-dot">.</span><small>GLOBAL COPYRIGHT INFRASTRUCTURE</small></span>
      </Link>
      <button className="mobile-menu" aria-label="메뉴 열기" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
        {nav.map(item => <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{isKr ? item.label : item.en}</NavLink>)}
      </nav>
      <div className="top-actions">
        <button className="language" onClick={() => setLanguage(isKr ? 'EN' : 'KR')}><Globe2 size={16}/>{language}<span>⌄</span></button>
        <Link className="login-button" to="/login">{isKr ? '로그인' : 'Sign in'} <ArrowUpRight size={15}/></Link>
      </div>
    </header>
    {children}
    <footer className="footer">
      <div className="footer-main">
        <div><div className="footer-brand">TCS<span>.</span></div><p>독립적이고 투명한 글로벌 음악저작권 관리 인프라</p></div>
        <div className="footer-links"><Link to="/about">TCS 소개</Link><Link to="/network">플랫폼 연동</Link><Link to="/finance">저작권 금융</Link><Link to="/global">GLOBAL</Link><Link to="/contact">문의하기</Link></div>
      </div>
      <div className="footer-bottom"><span>© 2026 TCS. All rights reserved.</span><span>이용약관　 개인정보처리방침　 고객지원</span></div>
    </footer>
  </div>
}

function Home({ language }: { language: Language }) {
  const kr = language === 'KR'
  return <main className="home">
    <section className="hero hero-v2">
      <div className="hero-grid-bg"/>
      <div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/>
      <div className="hero-inner">
        <div className="eyebrow"><span/> {kr ? 'GLOBAL MUSIC COPYRIGHT INFRASTRUCTURE' : 'GLOBAL MUSIC COPYRIGHT INFRASTRUCTURE'}</div>
        <h1>{kr ? <>음악의 권리를 연결하고<br/><em>창작의 가치를 지킵니다.</em></> : <>Connecting music rights.<br/><em>Protecting creative value.</em></>}</h1>
        <p>{kr
          ? <>TCS는 저작물과 권리정보, 음악 이용기록, 저작권료 정산을 연결하는<br className="desktop-break"/> 개방형 글로벌 음악저작권 관리 인프라입니다.</>
          : <>An open global infrastructure connecting works, rights, usage records<br className="desktop-break"/> and royalty administration.</>}</p>
        <div className="hero-actions">
          <Link className="primary-button" to="/about">{kr ? 'TCS 알아보기' : 'Discover TCS'} <ArrowUpRight size={17}/></Link>
          <Link className="text-button" to="/network">{kr ? '연동 구조 보기' : 'Explore the network'} <ArrowRight size={16}/></Link>
        </div>
        <div className="hero-assurance"><ShieldCheck size={17}/><span>{kr ? '플랫폼 독립성' : 'Platform independence'}</span><i/><span>{kr ? '권리정보 보호' : 'Rights data protection'}</span><i/><span>{kr ? '투명한 정산' : 'Transparent royalties'}</span></div>
      </div>
      <div className="hero-visual" aria-label="TCS rights infrastructure network illustration">
        <div className="visual-halo halo-outer"/><div className="visual-halo halo-inner"/>
        <div className="visual-ring ring-one"/><div className="visual-ring ring-two"/>
        <div className="visual-center"><span><Music2 size={31}/></span><b>TCS</b><small>RIGHTS INFRA</small></div>
        <div className="visual-node v-node-top"><FileMusic size={18}/><span>WORKS & RIGHTS</span></div>
        <div className="visual-node v-node-left"><RadioTower size={18}/><span>USAGE DATA</span></div>
        <div className="visual-node v-node-right"><Wallet size={18}/><span>ROYALTIES</span></div>
        <div className="visual-node v-node-bottom"><Globe2 size={18}/><span>GLOBAL NETWORK</span></div>
        <div className="visual-caption">ONE INFRASTRUCTURE · OPEN ECOSYSTEM</div>
      </div>
      <div className="hero-index">01 <span>/</span> 04</div>
    </section>

    <section className="trust-strip">
      <div className="trust-inner">
        <div><b>RIGHTS</b><span>권리정보의 연결</span></div><i/>
        <div><b>USAGE</b><span>이용기록의 검증</span></div><i/>
        <div><b>ROYALTIES</b><span>징수와 분배의 투명성</span></div><i/>
        <div><b>GLOBAL</b><span>국경을 넘는 상호운용</span></div>
      </div>
    </section>

    <section className="intro-section section-wrap">
      <div className="intro-heading">
        <div className="section-kicker">WHY TCS</div>
        <h2>음악 산업의 다양한 주체를<br/><em>하나의 기준으로 연결합니다.</em></h2>
      </div>
      <div className="intro-copy"><p>TCS는 음원을 유통하는 플랫폼이 아닙니다. 창작자와 권리자, 저작권 관리단체, 독립 유통 플랫폼과 금융기관이 각자의 역할을 유지하면서 저작권 데이터를 신뢰할 수 있게 연결하는 공통 인프라입니다.</p><Link className="inline-link" to="/about">TCS의 역할과 원칙 <ArrowUpRight size={16}/></Link></div>
    </section>

    <section className="capabilities-section">
      <div className="section-wrap">
        <div className="section-heading-row"><div><div className="section-kicker">CORE INFRASTRUCTURE</div><h2>저작권 관리의 전 과정을<br/><em>하나의 흐름으로.</em></h2></div><p>정보를 연결하고, 이용을 확인하고,<br/>권리자에게 정산이 이어지도록 지원합니다.</p></div>
        <div className="capability-grid">
          <article className="capability-card"><div className="capability-top"><span>01</span><FileMusic/></div><h3>저작물과 권리정보</h3><p>저작물 식별정보와 권리자, 권리관계 및 계약 정보를 일관된 기준으로 연결합니다.</p><Link to="/copyright">자세히 보기 <ArrowUpRight size={15}/></Link></article>
          <article className="capability-card"><div className="capability-top"><span>02</span><RadioTower/></div><h3>음악 이용기록</h3><p>방송·공연·매장·온라인 등 다양한 경로의 음악 이용정보를 수집하고 검증합니다.</p><Link to="/copyright">자세히 보기 <ArrowUpRight size={15}/></Link></article>
          <article className="capability-card"><div className="capability-top"><span>03</span><Scale/></div><h3>TL 기준과 정책</h3><p>1초를 1 TL로 환산하고, 협회가 정한 적용지수와 정책 이력을 관리합니다.</p><Link to="/copyright">TL 기준 알아보기 <ArrowUpRight size={15}/></Link></article>
          <article className="capability-card"><div className="capability-top"><span>04</span><ChartNoAxesCombined/></div><h3>징수·분배·지급</h3><p>이용기록과 권리정보를 바탕으로 산정·징수·분배·지급의 근거를 연결합니다.</p><Link to="/copyright">정산 구조 보기 <ArrowUpRight size={15}/></Link></article>
        </div>
      </div>
    </section>

    <section className="network-section network-v2">
      <div className="section-wrap network-v2-inner">
        <div className="network-copy"><div className="section-kicker">OPEN PLATFORM NETWORK</div><h2>플랫폼은 독립적으로.<br/><em>저작권 관리는 함께.</em></h2><p>TIMELINK를 포함한 각 음원 유통 플랫폼은 독립적인 서비스로 운영됩니다. TCS는 공통 연동 기준과 API를 통해 필요한 권리·이용 데이터를 연결합니다.</p><ul><li><BadgeCheck size={17}/> 모든 참여 플랫폼에 공정한 연동 기준</li><li><LockKeyhole size={17}/> 플랫폼별 고객·영업·정산 데이터 분리</li><li><Network size={17}/> 표준 API 기반의 개방형 연결</li></ul><Link className="inline-link" to="/network">플랫폼 연동 안내 <ArrowUpRight size={16}/></Link></div>
        <div className="ecosystem">
          <div className="eco-top-label">INDEPENDENT SERVICES</div>
          <div className="eco-platforms"><div className="eco-platform"><span className="eco-symbol">T</span><b>TIMELINK</b><small>INDEPENDENT PLATFORM</small></div><div className="eco-platform"><span className="eco-symbol muted"><Music2 size={19}/></span><b>PLATFORM B</b><small>INDEPENDENT PLATFORM</small></div><div className="eco-platform"><span className="eco-symbol muted"><Music2 size={19}/></span><b>PLATFORM C</b><small>INDEPENDENT PLATFORM</small></div></div>
          <div className="eco-connectors"><span/><span/><span/></div>
          <div className="eco-core"><span><Network size={22}/></span><div><b>TCS</b><small>COMMON COPYRIGHT INFRASTRUCTURE</small></div></div>
          <div className="eco-bottom"><div><Users size={17}/> RIGHTS HOLDERS</div><div><Landmark size={17}/> ASSOCIATIONS</div><div><Wallet size={17}/> FINANCIAL PARTNERS</div></div>
          <div className="eco-footnote">Independent platforms · Shared standards · Separated data</div>
        </div>
      </div>
    </section>

    <section className="tl-section">
      <div className="section-wrap tl-inner">
        <div><div className="section-kicker">TL MEASUREMENT FRAMEWORK</div><h2>이용시간을 읽는<br/><em>공통의 기준, TL.</em></h2><p>TL은 음악 이용량을 표준화하기 위한 기준 단위입니다. 기본 이용량을 산출한 뒤, 매체와 이용 유형에 따른 적용지수를 협회 정책에 따라 반영합니다.</p><Link className="inline-link" to="/copyright">TL 적용 기준 알아보기 <ArrowUpRight size={16}/></Link></div>
        <div className="tl-equation"><div className="tl-unit"><strong>1</strong><b>SECOND</b><small>음악 이용시간</small></div><div className="tl-equals">=</div><div className="tl-unit highlight"><strong>1</strong><b>TL</b><small>기본 이용량</small></div><div className="tl-multiply">×</div><div className="tl-index"><span>협회 정책</span><b>적용지수</b><small>매체·이용 유형별 기준</small></div><div className="tl-result">적용 TL <span>기본 TL × 적용지수</span></div><p>TL은 이용량 관리 기준이며, 법적으로 확정된 원화 저작권 사용료와는 구분됩니다.</p></div>
      </div>
    </section>

    <section className="portals-section section-wrap">
      <div className="portal-heading"><div><div className="section-kicker">TCS SERVICE PORTALS</div><h2>역할에 맞는 업무 공간</h2><p>각 참여자는 부여된 권한과 계약 범위 안에서 필요한 서비스를 이용합니다.</p></div><Link className="inline-link" to="/login">통합 로그인 <ArrowUpRight size={16}/></Link></div>
      <div className="portal-grid">{portals.map((item, i) => <Link className="portal-card portal-v2" to={item.to} key={item.to}><div className="portal-card-top"><span className="portal-icon"><item.icon size={22}/></span><span className="portal-number">0{i + 1}</span></div><small>{item.tag}</small><h3>{kr ? item.title : item.en}</h3><p>{item.desc}</p><span className="portal-card-link">{kr ? '포털 안내' : 'Explore portal'} <ArrowUpRight size={15}/></span></Link>)}</div>
    </section>

    <section className="finance-band">
      <div className="section-wrap finance-band-inner"><div className="finance-icon"><Landmark size={27}/></div><div className="finance-band-copy"><div className="section-kicker">COPYRIGHT FINANCE</div><h2>저작권 수입이 창작자의<br/>새로운 금융 기회로 이어지도록.</h2><p>창작자의 동의에 기반한 권리·수입 데이터 검증을 금융기관과 연결합니다. 대출 심사와 금융 조건은 제휴 금융기관이 독립적으로 결정합니다.</p></div><Link className="outline-button" to="/finance">저작권 금융 안내 <ArrowUpRight size={16}/></Link></div>
    </section>

    <section className="global-section section-wrap"><div className="global-graphic"><div className="global-globe"><Globe2 size={76} strokeWidth={1}/><span className="globe-dot dot-1"/><span className="globe-dot dot-2"/><span className="globe-dot dot-3"/></div><div className="global-orbit-line"/></div><div className="global-copy"><div className="section-kicker">BEYOND BORDERS</div><h2>음악의 국경을 넘어<br/><em>글로벌 권리 네트워크로.</em></h2><p>국가별 저작권 관리체계와 해외 관리단체, 국제 협력 및 상호관리 구조를 고려해 글로벌 권리정보와 정산 연결 기반을 구축합니다.</p><Link className="inline-link" to="/global">글로벌 네트워크 <ArrowUpRight size={16}/></Link></div></section>

    <section className="home-detail-links section-wrap">
      <div className="section-kicker">EXPLORE TCS</div>
      <div className="home-detail-heading"><h2>TCS 핵심 안내</h2><p>플랫폼의 역할과 관리 기준을 주제별로 살펴보세요.</p></div>
      <div className="home-detail-grid">
        <Link to="/home/tcs-intro"><b>01</b><span>TCS 소개</span><ArrowUpRight size={16}/></Link>
        <Link to="/home/copyright-transparency"><b>02</b><span>저작권 투명관리</span><ArrowUpRight size={16}/></Link>
        <Link to="/home/tl-framework"><b>03</b><span>TL 관리 기준</span><ArrowUpRight size={16}/></Link>
        <Link to="/home/creator-economy"><b>04</b><span>창작자 경제 생태계</span><ArrowUpRight size={16}/></Link>
        <Link to="/home/copyright-finance"><b>05</b><span>저작권 금융</span><ArrowUpRight size={16}/></Link>
        <Link to="/home/global-network"><b>06</b><span>글로벌 네트워크</span><ArrowUpRight size={16}/></Link>
      </div>
    </section>

    <section className="final-cta"><div className="section-wrap final-cta-inner"><div><div className="section-kicker">CONNECT WITH TCS</div><h2>더 투명한 음악저작권 생태계,<br/><em>함께 연결해 나갑니다.</em></h2><p>플랫폼 연동과 기관 협력에 관한 문의를 환영합니다.</p></div><div className="final-cta-actions"><Link className="primary-button" to="/contact">협력 및 연동 문의 <ArrowUpRight size={17}/></Link><Link className="text-button" to="/about">TCS 소개 <ArrowRight size={16}/></Link></div></div></section>
  </main>
}



type PortalSection = { slug:string; title:string; description:string; children:string[] }
type PortalDefinition = { key:string; title:string; en:string; subtitle:string; sections:PortalSection[] }
const section = (slug:string,title:string,children:string[],description:string):PortalSection => ({slug,title,children,description})
const portalDefinitions:PortalDefinition[] = [
 {key:'creator',title:'창작자 포털',en:'CREATOR PORTAL',subtitle:'나의 권리와 저작물, 이용내역 및 저작권 수입을 확인하는 창작자 업무 공간입니다.',sections:[
 section('dashboard','MY DASHBOARD',['회원 자격 및 상태','신탁계약 현황','저작물 현황','저작권 수입 요약','분배·지급 현황','금융 서비스 현황','알림 및 처리 요청'],'회원자격·신탁·저작물·수입·지급·금융 현황을 한눈에 확인합니다.'),
 section('membership','회원 관리',['회원정보','회원 유형·자격','자격 변경 및 신청 이력'],'회원정보와 회원 유형·자격, 자격 변경 및 신청 이력을 관리합니다.'),
 section('trust','신탁계약 관리',['계약 현황','계약 범위 및 대상','계약 문서','변경·해지 신청 및 이력'],'신탁계약의 상태와 범위, 계약 문서 및 변경 이력을 확인합니다.'),
 section('works','나의 저작물',['저작물 목록','저작물 상세','권리자·지분 정보','등록·수정 요청'],'등록된 저작물과 권리자·지분 정보를 확인하고 변경을 요청합니다.'),
 section('tl-assets','TL 자산 관리',['TL 음악 자산','창작·등록 증명','원본 파일 증명','AI 음악 관련 증빙','권리·메타데이터 이력','유통 플랫폼 연결 현황'],'TL 음악 자산과 창작·원본 증명, AI 음악 증빙 및 연동 이력을 관리합니다.'),
 section('usage','음악 사용내역',['전체 이용내역','매체·사업자별 이용내역','기간별 조회'],'매체·사업자·기간별 음악 이용기록을 확인합니다.'),
 section('royalties','저작권료 정산',['예상 정산','확정 정산','지급 예정','지급 완료','미분배 내역','정산 명세서','이의신청'],'예상·확정 정산과 지급, 미분배 및 이의신청을 확인합니다.'),
 section('finance','저작권 금융 서비스',['저작권료 담보대출','저작권 수입 기반 신용대출','한도·자격 조회','저작권 수입 증명서','금융 신청','심사 진행 현황','대출 실행 내역','상환 현황'],'저작권 수입을 바탕으로 한 금융 연계 및 신청 진행 상태를 확인합니다.'),
 section('global','글로벌 저작권',['해외 이용내역','국가별 정산','국제 권리정보'],'해외 이용내역과 국가별 정산, 국제 권리정보를 확인합니다.'),
 section('community','회원 커뮤니티',['공지','창작자 게시판','문의·지원'],'창작자 공지와 게시판, 문의·지원 정보를 확인합니다.')
 ]},
 {key:'association',title:'협회 관리자',en:'ASSOCIATION ADMINISTRATION',subtitle:'협회 담당자의 회원·권리·이용기록·징수·분배 및 시스템 운영 업무를 위한 관리 공간입니다.',sections:[
 section('dashboard','통합 대시보드',['전체 업무 현황','처리 대기 및 알림','기간별 운영 지표'],'협회 전체 업무 현황과 주요 처리 대기 항목을 요약합니다.'),
 section('members','회원 관리',['회원 검색·상세','회원 유형·자격 관리','가입·변경 신청 처리'],'회원 검색·상세, 회원 유형·자격 및 가입·변경 신청을 관리합니다.'),
 section('trust','신탁계약 관리',['계약 등록·조회','계약 범위·상태','계약 변경·해지 이력'],'신탁계약 등록·조회와 계약 범위·상태 및 변경 이력을 관리합니다.'),
 section('rights','저작물 및 권리 관리',['저작물 식별·등록','권리자·지분 관계','권리 충돌·중복 검토','권리 변경 이력'],'저작물 식별정보와 권리자·지분, 충돌 검토 및 변경 이력을 관리합니다.'),
 section('usage','음악 이용 관리',['플랫폼 이용기록 수신','이용기록 검증','이용 유형·매체 분류','오류·누락·중복 처리'],'플랫폼 이용기록을 수신하고 검증하며 오류·누락·중복을 처리합니다.'),
 section('tl-index','TL 적용지수 관리',['적용지수 조회','매체·이용 유형별 정책','변경 신청·승인','적용 이력·감사 로그'],'협회 정책에 따른 적용지수와 승인·감사 이력을 관리합니다.'),
 section('collection','저작권료 징수 관리',['산정 근거','징수 대상·청구','수납 현황','미수·정정 처리'],'산정 근거와 청구·수납, 미수 및 정정 업무를 관리합니다.'),
 section('distribution','분배 및 지급 관리',['분배 산정','권리자별 배분','지급 승인·처리','미분배 관리','정산 이력·보고'],'분배 산정과 권리자별 배분, 지급 승인 및 미분배 업무를 관리합니다.'),
 section('finance','저작권 금융 관리',['금융기관 연계 현황','수입 데이터 검증','증명서 발급·이력','동의·접근 권한 관리'],'금융기관 연계와 수입 데이터 검증, 동의 및 접근 권한을 관리합니다.'),
 section('integrations','유통사 연동 관리',['플랫폼 등록·계약','API 자격·키 관리','데이터 수신 상태','연동 이용료·정산'],'플랫폼 계약·API 자격과 데이터 수신, 연동 이용료를 관리합니다.'),
 section('global','글로벌 관리',['국가·단체 관리','국제 협약·상호관리','해외 이용·정산','환율·통화 기준 관리'],'국가·단체와 국제 협약, 해외 이용·정산 및 통화 기준을 관리합니다.'),
 section('management','협회 경영 관리',['업무 통계','수수료·비용 현황','운영 보고서'],'협회 업무 통계와 수수료·비용, 운영 보고서를 관리합니다.'),
 section('system','시스템 관리',['사용자·역할·권한','보안·접근 이력','코드·기준정보','감사 로그·시스템 설정'],'사용자·역할·권한과 보안, 기준정보 및 감사 로그를 관리합니다.')
 ]},
 {key:'partner',title:'유통사·음악 이용사업자',en:'BUSINESS PARTNER PORTAL',subtitle:'독립 플랫폼과 음악 이용사업자가 계약·저작물·이용정보·정산 데이터를 연동하는 업무 공간입니다.',sections:[
 section('dashboard','Business Dashboard',['연동 현황','최근 데이터 제출','검증 결과 및 알림'],'사업자 계약과 데이터 연동, 정산 처리 현황을 요약합니다.'),
 section('business','사업자 관리',['사업자 정보','계약·서비스 범위','담당자·권한'],'사업자 정보와 계약·서비스 범위, 담당자 및 권한을 관리합니다.'),
 section('works','저작물 연동',['저작물 식별정보 조회','메타데이터 매핑','권리정보 확인'],'저작물 식별정보와 메타데이터, 권리정보를 연동합니다.'),
 section('usage','음악 사용정보 연동',['이용기록 제출','제출 상태·검증 결과','오류·재전송 관리'],'음악 이용기록 제출과 검증 결과, 오류·재전송을 관리합니다.'),
 section('settlement','정산 연동',['이용량·산정 결과 확인','청구·수납 정보','정산 자료 교환'],'이용량·산정 결과와 청구·수납 및 정산 자료를 교환합니다.'),
 section('api','API 및 기술 지원',['API 문서','인증키·접근 권한','테스트 환경','장애·문의'],'API 문서와 인증키, 테스트 환경 및 장애 지원을 제공합니다.'),
 section('contracts','이용료 및 계약',['이용계약','시스템 이용료·연동 수수료','청구·납부 이력'],'이용계약과 시스템 이용료·연동 수수료, 납부 이력을 확인합니다.')
 ]},
 {key:'finance',title:'금융기관 제휴 포털',en:'FINANCIAL INSTITUTION PORTAL',subtitle:'제휴 금융기관이 창작자 동의 범위에서 저작권 수입을 확인하고 심사·상환 정보를 연계하는 업무 공간입니다.',sections:[
 section('dashboard','Financial Dashboard',['기관별 처리 현황','심사 요청 대기','최근 처리 이력'],'기관별 수입 확인·심사 요청 및 처리 현황을 요약합니다.'),
 section('institutions','제휴 금융기관 관리',['기관·담당자 정보','계약·접근 권한'],'기관·담당자 정보와 계약 및 접근 권한을 관리합니다.'),
 section('income','저작권 수입 확인',['창작자 동의 확인','권리·수입 증명 요청','검증 결과·유효기간'],'창작자 동의와 권리·수입 증명 요청, 검증 결과를 확인합니다.'),
 section('review','대출 심사 연동',['심사 요청','제출·조회 데이터','심사 상태 회신'],'심사 요청과 제출·조회 데이터, 심사 상태 회신을 관리합니다.'),
 section('collateral','담보 및 상환 관리',['담보 관련 확인 정보','상환 재원·지급 연계','상태 변경 및 이력'],'담보 관련 확인 정보와 상환 재원·지급 연계 상태를 관리합니다.'),
 section('reports','금융 통계 및 보고',['기관별 처리 현황','보고서·감사 이력'],'기관별 처리 현황과 보고서·감사 이력을 확인합니다.')
 ]},
 {key:'global',title:'글로벌 네트워크',en:'GLOBAL NETWORK PORTAL',subtitle:'국가별 관리단체와 국제 협력, 글로벌 저작물 및 해외 정산 업무를 연결하는 공간입니다.',sections:[
 section('dashboard','Global Dashboard',['국가별 현황','협력단체 현황','국제 정산 현황'],'국가·단체·글로벌 저작물 및 국제 정산 현황을 요약합니다.'),
 section('countries','국가별 관리',['국가 목록','국가별 제도·정책','현지 관리단체'],'국가별 제도와 관리단체, 통화 및 운영 기준을 관리합니다.'),
 section('agreements','국제 협력·상호관리계약',['협력기관 목록','상호관리계약','계약 범위·유효기간'],'국제 협력기관과 상호관리계약의 범위·기간·상태를 관리합니다.'),
 section('works','글로벌 저작물',['글로벌 저작물 목록','국가별 권리정보','식별정보 매핑'],'해외 권리정보와 저작물 식별정보를 연결합니다.'),
 section('settlement','글로벌 정산',['해외 이용내역','국가별 정산','통화·환율 기준','분배 및 지급 현황'],'해외 이용내역과 국가·통화별 정산·분배 현황을 관리합니다.')
 ]}
]

function PortalPage() {
 const {portalKey,section:sectionSlug,child}=useParams()
 const portal=portalDefinitions.find(item=>item.key===portalKey) ?? portalDefinitions[0]
 const selected=portal.sections.find(item=>item.slug===sectionSlug)
 const childIndex=child ? Number(child)-1 : -1
 const selectedChild=selected && childIndex>=0 ? selected.children[childIndex] : undefined
 const heading=selectedChild ?? selected?.title ?? portal.title
 const description=selected ? (selectedChild ? selected.title+'의 세부 업무와 처리 상태를 확인하는 화면입니다.' : selected.description) : portal.subtitle
 return <main className="portal-workspace">
  <section className="portal-workspace-head"><div className="section-wrap"><div className="section-kicker">{portal.en}</div><div className="portal-workspace-breadcrumb"><Link to="/">TCS HOME</Link><span>/</span><span>{portal.title}</span>{selected&&<><span>/</span><b>{selected.title}</b></>}</div><h1>{heading}</h1><p>{description}</p><span className="demo-note">UI PROTOTYPE · 실제 회원·정산·금융 데이터 미연동</span></div></section>
  <section className="portal-workspace-body section-wrap">
   <aside className="portal-workspace-nav"><div className="portal-nav-heading"><small>{portal.en}</small><b>{portal.title}</b></div>
    {portal.sections.map(item=><div className="portal-nav-group" key={item.slug}><Link className={selected?.slug===item.slug?'selected':''} to={'/portal/'+portal.key+'/'+item.slug}>{item.title}<ArrowUpRight size={13}/></Link>{selected?.slug===item.slug&&item.children.map((name,i)=><Link className={selectedChild===name?'child-selected':'portal-child-link'} key={name} to={'/portal/'+portal.key+'/'+item.slug+'/'+(i+1)}>{name}</Link>)}</div>)}
   </aside>
   <div className="portal-workspace-main">
    <div className="portal-workspace-title"><div><div className="section-kicker">{selected ? selected.slug.toUpperCase() : 'WORKSPACE OVERVIEW'}</div><h2>{selected ? heading : '업무 메뉴'}</h2><p>{description}</p></div><span className="prototype-pill">시연용 화면</span></div>
    {!selected ? <div className="portal-workspace-grid">{portal.sections.map((item,i)=><Link className="portal-workspace-card" key={item.slug} to={'/portal/'+portal.key+'/'+item.slug}><small>{String(i+1).padStart(2,'0')}</small><h3>{item.title}</h3><p>{item.description}</p><span>업무 화면 열기 <ArrowUpRight size={14}/></span></Link>)}</div> :
      <><div className="portal-detail-summary"><div><small>SECTION</small><b>{selected.title}</b></div><div><small>SUB MENU</small><b>{selected.children.length}개</b></div><div><small>ACCESS</small><b>역할·권한 기준</b></div></div>
      <div className="portal-child-list">{selected.children.map((name,i)=><Link key={name} to={'/portal/'+portal.key+'/'+selected.slug+'/'+(i+1)} className={selectedChild===name?'current':''}><span>{String(i+1).padStart(2,'0')}</span><b>{name}</b><ArrowUpRight size={15}/></Link>)}</div>
      <div className="portal-demo-panel"><div className="section-kicker">WORKFLOW PREVIEW</div><h3>{selectedChild ?? selected.title} 업무 흐름</h3><p>이 화면은 메뉴 구조와 업무 흐름을 검토하기 위한 시연용 인터페이스입니다. 실제 데이터 조회·저장·승인·정산 처리는 연결되어 있지 않으며, 향후 확정된 API와 역할별 권한 정책에 따라 구현합니다.</p><div className="portal-demo-steps"><span>01 · 정보 확인</span><i/><span>02 · 근거 검토</span><i/><span>03 · 처리 이력</span></div></div></>}
   </div>
  </section>
 </main>
}

type PublicItem = { slug: string; title: string; en: string; desc: string; points: string[] }
type PublicCategory = { key: string; title: string; en: string; eyebrow: string; intro: string; items: PublicItem[] }

const publicCategories: PublicCategory[] = [
  { key: 'home', title: 'HOME', en: 'HOME', eyebrow: 'TCS GLOBAL COPYRIGHT INFRASTRUCTURE', intro: 'TCS의 역할과 핵심 관리 기준, 창작자 경제 생태계 및 글로벌 연결 구조를 소개합니다.', items: [
    { slug:'tcs-intro', title:'TCS 소개', en:'About TCS', desc:'TCS는 음악저작물과 권리정보, 이용기록, 저작권료 정산을 연결하는 공통 관리 인프라입니다.', points:['TCS는 직접 음원을 유통하거나 판매하지 않습니다.','권리자·협회·독립 플랫폼·금융기관이 각자의 역할을 유지하며 연결됩니다.','공통 기준과 표준 API를 통해 투명한 권리정보 흐름을 지원합니다.'] },
    { slug:'copyright-transparency', title:'저작권 투명관리', en:'Copyright Transparency', desc:'저작물의 권리관계부터 이용기록과 정산 근거까지 연결해 추적 가능한 관리 체계를 지향합니다.', points:['저작물 식별정보와 권리자 정보를 연결합니다.','이용기록의 출처와 검증 상태를 관리합니다.','산정·징수·분배·지급 단계별 근거와 이력을 구분합니다.'] },
    { slug:'tl-framework', title:'TL 관리 기준', en:'TL Measurement Framework', desc:'TL은 음악 이용시간을 표준화해 관리하기 위한 기준 단위입니다.', points:['기본 TL은 음악 이용시간(초) × 1 TL로 산출합니다.','적용 TL은 기본 TL에 협회가 설정한 적용지수를 반영합니다.','TL은 법적으로 확정된 원화 저작권 사용료와 구분됩니다.'] },
    { slug:'creator-economy', title:'창작자 경제 생태계', en:'Creator Economy', desc:'창작자의 권리와 이용기록, 저작권 수입이 투명하게 이어지는 생태계 기반을 마련합니다.', points:['창작자와 권리자의 권리정보를 연결합니다.','정산 내역은 예상·확정·지급 단계로 구분합니다.','회원 자격과 신탁계약 상태를 별도로 관리합니다.'] },
    { slug:'copyright-finance', title:'저작권 금융', en:'Copyright Finance', desc:'검증된 저작권 수입정보를 창작자의 금융 기회와 연결하는 데이터 연계 기반입니다.', points:['금융기관이 대출 심사와 조건을 독립적으로 결정합니다.','창작자의 적법한 동의 범위에서 수입정보를 확인합니다.','저작권 소유권이나 기존 신탁권리가 대출만으로 자동 이전되지 않습니다.'] },
    { slug:'global-network', title:'글로벌 네트워크', en:'Global Network', desc:'국가별 관리체계와 해외 관리단체를 연결하는 상호운용 기반을 구축합니다.', points:['국가별 제도와 관리단체의 차이를 고려합니다.','국제 협력 및 상호관리계약 정보를 관리합니다.','해외 이용료의 징수·분배·정산 흐름을 연결합니다.'] },
  ]},
  { key:'copyright', title:'저작권 관리 안내', en:'Copyright Management', eyebrow:'RIGHTS · USAGE · ROYALTIES', intro:'저작물과 권리정보의 등록부터 음악 이용내역, 사용료 산정·징수, 분배·지급까지 저작권 관리의 주요 절차를 안내합니다.', items:[
    {slug:'music-copyright',title:'음악저작권 안내',en:'Music Copyright',desc:'음악저작물에 관한 권리정보와 권리관계를 이해하기 위한 기본 안내입니다.',points:['저작물과 저작인접물 등 권리 대상은 구분해 확인해야 합니다.','권리자·지분·관리 범위는 확인 가능한 자료에 따라 관리합니다.','권리정보 변경은 근거자료와 이력을 함께 보존합니다.']},
    {slug:'trust',title:'저작권 신탁 안내',en:'Copyright Trust',desc:'신탁계약의 범위와 상태, 계약 당사자 및 대상 권리를 확인하는 안내입니다.',points:['신탁계약 상태와 회원 자격은 별도로 관리합니다.','계약 범위와 대상 권리를 확인합니다.','변경·해지 등 계약 이력은 별도로 기록합니다.']},
    {slug:'works-registration',title:'저작물 등록 및 권리정보',en:'Works Registration & Rights',desc:'저작물 식별정보와 창작자·권리자·지분 정보를 등록하고 관리하는 절차입니다.',points:['저작물 식별정보와 메타데이터를 확인합니다.','권리자와 지분 관계를 근거자료에 따라 기록합니다.','중복·충돌이 발견되면 확인 절차를 거칩니다.']},
    {slug:'usage-records',title:'음악 이용내역',en:'Music Usage Records',desc:'방송·공연·매장·온라인 등 매체별 음악 이용정보의 제출과 검증을 안내합니다.',points:['이용 사업자와 플랫폼이 이용정보의 원천을 제출합니다.','이용 시각·시간·매체·식별정보를 확인합니다.','누락·중복·오류 기록은 검증 상태와 함께 관리합니다.']},
    {slug:'fee-assessment',title:'사용료 산정·징수',en:'Fee Assessment & Collection',desc:'검증된 이용기록과 적용 정책을 바탕으로 사용료 산정 및 징수 근거를 연결합니다.',points:['기본 TL은 이용시간 초 단위로 산출합니다.','적용지수는 협회가 설정·승인한 정책을 따릅니다.','TL 수치와 확정 원화 사용료는 구분해 표시합니다.']},
    {slug:'distribution',title:'분배 및 지급',en:'Distribution & Payment',desc:'권리관계와 이용기록, 확정된 정산 근거를 바탕으로 분배·지급 정보를 관리합니다.',points:['예상액·확정액·지급예정액·지급완료액을 구분합니다.','분배 근거와 권리자별 배분 내역을 연결합니다.','정정과 이의신청 이력을 보존합니다.']},
    {slug:'undistributed',title:'미분배 저작권료',en:'Undistributed Royalties',desc:'권리자 확인이나 권리관계 정리가 필요한 미분배 금액의 상태를 관리합니다.',points:['미분배 사유와 관련 이용기록을 연결합니다.','권리 확인 및 보완 요청 절차를 제공합니다.','해결·분배 처리 시 변경 이력을 남깁니다.']},
    {slug:'ai-music-rights',title:'AI 음악과 권리 증빙',en:'AI Music & Rights Evidence',desc:'AI 도구가 관여한 음악의 창작 과정과 권리 관련 증빙을 구분해 관리합니다.',points:['인간 창작 기여와 AI 도구 사용 사실을 구분해 기록합니다.','사용 도구·버전·입력 및 편집 이력 등 제출 가능한 증빙을 관리합니다.','법적 권리 인정 여부는 관련 법령과 개별 사실관계에 따라 판단합니다.']},
  ]},
  {key:'membership',title:'회원 가입 안내',en:'Membership Guide',eyebrow:'MEMBERSHIP & TRUST',intro:'창작자, 준회원·정회원, 신탁계약자 및 음악출판사 등 참여 유형과 자격 확인·제출서류·절차를 안내합니다.',items:[
    {slug:'creator-guide',title:'창작자 안내',en:'Creator Guide',desc:'음악 창작자가 권리정보를 관리하고 관련 절차를 확인하기 위한 안내입니다.',points:['본인 확인과 창작·권리 관련 자료를 준비합니다.','회원 유형과 신탁계약 여부를 각각 확인합니다.','등록 이후 권리정보 변경사항을 최신 상태로 유지합니다.']},
    {slug:'associate-member',title:'준회원·정회원 안내',en:'Associate & Full Membership',desc:'회원 유형과 자격은 협회 정관 및 관련 규정에 근거해 구분됩니다.',points:['준회원·정회원 등 회원 등급을 구분합니다.','정회원 승격·의결권·선거권은 현행 규정에 따라 판단합니다.','확인되지 않은 수입액 등 임의 기준을 가입 요건으로 두지 않습니다.']},
    {slug:'trust-agreement',title:'신탁계약 안내',en:'Trust Agreement',desc:'신탁계약 체결 전 계약 대상과 권리 범위, 계약 상태를 확인하는 안내입니다.',points:['계약 당사자와 대상 저작물을 확인합니다.','신탁 범위와 제외 권리를 확인합니다.','신탁계약 체결이 정회원 자격을 자동으로 의미하지 않습니다.']},
    {slug:'publisher',title:'음악출판사 안내',en:'Music Publisher Guide',desc:'음악출판사와 권리관리 사업자의 등록 및 권리정보 제출에 관한 안내입니다.',points:['법인·사업자 및 담당자 정보를 확인합니다.','관리 대상 저작물과 권리 범위의 근거를 제출합니다.','위임·양도·승계 관계를 구분해 등록합니다.']},
    {slug:'eligibility-documents',title:'자격 및 제출서류',en:'Eligibility & Documents',desc:'가입·계약 유형에 따라 필요한 자격 확인 및 제출자료를 안내합니다.',points:['신청 유형에 맞는 본인·사업자 확인자료를 준비합니다.','저작물·권리관계·위임 관계를 확인할 수 있는 자료를 준비합니다.','최종 서류 목록은 해당 협회의 현행 규정과 안내를 따릅니다.']},
    {slug:'application-process',title:'가입 절차 및 FAQ',en:'Application Process & FAQ',desc:'가입 신청부터 자료 확인과 결과 안내까지의 기본 절차를 소개합니다.',points:['신청 유형 선택 및 기본정보 제출','자격·서류 확인 및 보완 요청 대응','심사 결과와 후속 계약 절차 안내']},
  ]},
  {key:'business',title:'유통사 및 음악 이용사업자',en:'Distributors & Music Users',eyebrow:'OPEN PLATFORM INTEGRATION',intro:'음원 유통사와 방송·온라인 서비스, 카페·매장, 공연 사업자가 독립성을 유지하면서 TCS 공통 기준에 따라 연동하는 방법을 안내합니다.',items:[
    {slug:'distributors',title:'음원 유통사',en:'Music Distributors',desc:'독립 음원 유통 플랫폼이 저작물 및 권리정보를 연동하는 구조입니다.',points:['플랫폼은 자체 서비스와 고객 데이터를 독립적으로 운영합니다.','TCS와 공통 API 및 데이터 규격으로 연결합니다.','모든 참여 플랫폼에 동일한 연동·보호 기준을 적용합니다.']},
    {slug:'broadcast-online',title:'방송·온라인 서비스',en:'Broadcast & Online Services',desc:'방송 및 온라인 음악 서비스의 이용정보 연동 범위를 안내합니다.',points:['매체별 이용정보 제출 범위를 사전에 합의합니다.','이용기록의 형식·주기·검증 규칙을 정의합니다.','서비스별 이용 데이터는 상호 분리해 관리합니다.']},
    {slug:'cafe-store',title:'카페·매장 사업자',en:'Cafes & Stores',desc:'카페와 일반 매장 등 영업공간의 음악 이용정보와 계약 안내입니다.',points:['사업장 및 이용 형태를 확인합니다.','이용계약과 적용 범위는 관련 기준에 따라 확인합니다.','이용기록 제출 방식과 정산 자료 교환 범위를 정합니다.']},
    {slug:'performance-events',title:'공연·행사 사업자',en:'Performance & Event Organizers',desc:'공연·행사에서 발생하는 음악 이용정보 제출과 계약 안내입니다.',points:['행사·공연의 주최 및 이용 조건을 확인합니다.','사용 음악과 이용시간 등 필요한 정보를 기록합니다.','권리·사용료 산정은 적용되는 규정과 계약을 따릅니다.']},
    {slug:'usage-contract',title:'이용계약 안내',en:'Usage Agreements',desc:'사업자 유형과 이용 범위에 맞는 계약 및 연동 조건을 안내합니다.',points:['계약 주체와 이용 범위를 명확히 합니다.','TCS 시스템 이용료·API 연동 수수료는 계약 당사자 간 별도 조건으로 정합니다.','기존 협회 관리수수료와 창작자 부담을 부당하게 중복시키지 않습니다.']},
    {slug:'api-integration',title:'API 연동 안내',en:'API Integration',desc:'표준 API를 통한 인증, 데이터 제출, 응답 확인 및 오류 처리 흐름입니다.',points:['연동 신청 및 기술 사양 협의','테스트 환경에서 데이터 형식과 인증 검증','운영 전환 승인 및 장애·재전송 절차 확인']},
  ]},
  {key:'finance',title:'저작권 금융',en:'Copyright Finance',eyebrow:'ROYALTY-BASED FINANCE',intro:'저작권 수입을 주요 상환 재원으로 삼는 금융 연계 구조를 안내합니다. 금융기관은 심사·실행·금리·상환 조건을 독립적으로 결정합니다.',items:[
    {slug:'royalty-secured-loan',title:'저작권료 담보대출',en:'Royalty Receivable Secured Loan',desc:'저작권료 지급채권 등 적법하게 담보 설정할 수 있는 권리와 과거 수입 실적을 바탕으로 심사하는 금융 방식입니다.',points:['모든 저작권 자체가 당연히 담보가 되는 것은 아닙니다.','개별 권리의 법적 성격과 계약을 확인합니다.','금융기관이 담보 적격성과 대출 조건을 판단합니다.']},
    {slug:'royalty-credit-loan',title:'저작권 수입 기반 신용대출',en:'Royalty-Income-Based Credit',desc:'별도 담보 없이 저작권 수입 실적과 지속성·변동성을 신용평가에 반영하는 금융 방식입니다.',points:['과거 수입의 기간별 실적을 확인합니다.','수입 지속성과 변동성 등을 금융기관이 평가합니다.','대출 한도·금리·상환 조건은 금융기관이 결정합니다.']},
    {slug:'income-certificate',title:'저작권 수입 증명',en:'Royalty Income Verification',desc:'창작자의 동의와 권한 범위 안에서 저작권 수입정보를 확인·증명하는 연계 절차입니다.',points:['정보 제공 목적과 범위를 명확히 합니다.','요청자와 창작자 동의 및 유효기간을 확인합니다.','증명 가능한 수입 기간·항목·상태를 구분합니다.']},
    {slug:'finance-process',title:'금융 신청 절차',en:'Finance Application Process',desc:'창작자 신청과 동의, 수입정보 확인, 금융기관 심사로 이어지는 기본 절차입니다.',points:['금융상품 및 제휴기관 확인','창작자 동의 후 필요한 수입정보 검증 요청','금융기관의 독립 심사·실행 및 상환 안내']},
    {slug:'financial-partners',title:'제휴 금융기관',en:'Financial Partners',desc:'TCS와 데이터 연계 계약을 체결한 금융기관의 역할과 책임을 안내합니다.',points:['금융기관은 대출 심사·실행·금리·상환을 책임집니다.','TCS는 동의 범위 내 권리·수입 데이터 검증을 지원합니다.','금융기관 포털은 협회 관리자 권한과 분리됩니다.']},
    {slug:'finance-faq',title:'금융 FAQ',en:'Finance FAQ',desc:'저작권 수입정보 연계와 금융 신청에 관한 자주 묻는 질문입니다.',points:['TCS는 대출을 직접 실행하거나 금리를 정하지 않습니다.','수입정보 제공은 창작자의 동의와 권한 범위에 따릅니다.','대출 가능 여부와 조건은 제휴 금융기관의 심사 결과에 따릅니다.']},
  ]},
  {key:'global',title:'GLOBAL',en:'GLOBAL',eyebrow:'CROSS-BORDER RIGHTS NETWORK',intro:'국가별 저작권 관리체계와 해외 관리단체, 국제 협력 및 상호관리, 해외 이용료 징수·분배의 연결 기반을 소개합니다.',items:[
    {slug:'country-systems',title:'국가별 저작권 관리체계',en:'Country Copyright Systems',desc:'국가별 저작권 법제와 관리단체의 운영 차이를 고려한 글로벌 연계 구조입니다.',points:['각 국가의 법률·제도와 권리 범위를 구분합니다.','현지 관리단체의 공식 기준을 확인합니다.','국가별 차이를 단일 규칙으로 단순화하지 않습니다.']},
    {slug:'overseas-societies',title:'해외 관리단체',en:'Overseas Collective Management Organizations',desc:'해외 저작권 관리단체와의 정보 교환 및 협력 관계를 관리합니다.',points:['단체별 역할과 관리 권리 범위를 확인합니다.','공식 식별자와 데이터 교환 기준을 매핑합니다.','협력 상태와 담당 창구를 기록합니다.']},
    {slug:'reciprocal-agreements',title:'국제 협력 및 상호관리',en:'International Cooperation & Reciprocal Agreements',desc:'국가·단체 간 상호관리계약과 협력 범위에 관한 정보를 연결합니다.',points:['계약 당사자와 적용 지역을 확인합니다.','대상 권리·이용 유형·기간을 구분합니다.','계약 변경과 유효기간 이력을 보존합니다.']},
    {slug:'foreign-royalties',title:'해외 이용료 징수·분배',en:'Foreign Royalties Collection & Distribution',desc:'해외 이용정보와 징수·분배 자료를 국가·통화별로 관리하는 구조입니다.',points:['원천 이용정보와 현지 정산 자료를 연결합니다.','통화·환율 기준일과 금액 항목을 구분합니다.','분배·지급 상태와 정정 이력을 관리합니다.']},
    {slug:'global-creators',title:'글로벌 창작자 안내',en:'Global Creator Guide',desc:'해외 권리정보와 이용내역, 국제 정산 관련 기본 안내입니다.',points:['해외 관리 범위와 계약 상태를 확인합니다.','국가별 권리정보 확인 절차를 안내합니다.','해외 정산은 현지 제도와 상호관리 조건에 따릅니다.']},
  ]},
  {key:'support',title:'고객지원',en:'Customer Support',eyebrow:'HELP & INFORMATION',intro:'TCS 이용자를 위한 공지, FAQ, 자료, 문의, 민원·이의제기 및 정책 문서를 안내합니다.',items:[
    {slug:'notices',title:'공지사항',en:'Notices',desc:'서비스 운영 및 정책 변경, 시스템 안내를 공지하는 공간입니다.',points:['중요 공지의 게시일과 적용일을 구분합니다.','정책 변경은 변경 이력과 함께 안내합니다.','긴급 장애 및 점검 안내를 별도로 표시합니다.']},
    {slug:'faq',title:'FAQ',en:'Frequently Asked Questions',desc:'TCS 구조와 권리관리, TL, 회원·신탁, 금융 연계에 관한 자주 묻는 질문입니다.',points:['서비스의 역할과 범위를 안내합니다.','실제 계약·규정 확인이 필요한 질문은 해당 근거를 안내합니다.','답변이 변경되면 최신 기준을 반영합니다.']},
    {slug:'resources',title:'자료실',en:'Resources',desc:'이용 안내서와 표준 문서, 기술자료 등 공식 자료를 제공하는 공간입니다.',points:['자료의 버전과 게시일을 표시합니다.','공개 가능한 문서만 배포합니다.','기술자료는 연동 버전과 함께 관리합니다.']},
    {slug:'contact',title:'문의하기',en:'Contact Us',desc:'플랫폼 연동과 기관 협력, 서비스 이용에 관한 문의 경로입니다.',points:['문의 유형과 회신에 필요한 정보를 구분합니다.','개인정보는 문의 처리에 필요한 최소 범위로 수집합니다.','현재 화면은 시연용이며 실제 문의 전송 기능은 연결되지 않았습니다.']},
    {slug:'complaints',title:'민원 및 이의제기',en:'Complaints & Appeals',desc:'권리정보와 이용기록, 정산 결과에 대한 확인 및 이의제기 절차를 안내합니다.',points:['대상 항목과 이의 사유를 구체적으로 확인합니다.','관련 저작물·이용기록·정산 자료를 연결합니다.','접수·검토·보완·결과 통지의 이력을 보존합니다.']},
    {slug:'terms',title:'이용약관',en:'Terms of Use',desc:'TCS 공개 서비스와 연동 서비스 이용에 관한 약관 안내 영역입니다.',points:['서비스 범위와 이용자 책임을 명확히 합니다.','플랫폼 이용계약과 협회 관리 규정은 구분합니다.','정식 약관은 법률 검토 및 승인 후 게시합니다.']},
    {slug:'privacy',title:'개인정보 처리방침',en:'Privacy Policy',desc:'개인정보 처리 목적과 항목, 보유기간, 제3자 제공 및 이용자 권리를 안내하는 영역입니다.',points:['수집 목적과 최소 수집 원칙을 명시합니다.','보유기간과 파기 절차를 구분합니다.','금융기관 등 제3자 제공은 적법한 근거와 동의 범위에 따릅니다.']},
  ]},
]

function PublicPage({ categoryKey }: { categoryKey: string }) {
  const { slug } = useParams()
  const category = publicCategories.find(item => item.key === categoryKey) ?? publicCategories[0]
  const selected = category.items.find(item => item.slug === slug)
  const title = selected?.title ?? category.title
  const description = selected?.desc ?? category.intro
  const eyebrow = selected?.en ?? category.eyebrow
  return <main className="public-page">
    <section className="public-hero">
      <div className="public-hero-inner">
        <div className="section-kicker">{eyebrow}</div>
        <div className="public-breadcrumb"><Link to="/">HOME</Link><span>/</span><span>{category.title}</span>{selected && <><span>/</span><b>{selected.title}</b></>}</div>
        <h1>{title}</h1><p>{description}</p>
        <div className="public-hero-meta"><span> TCS PUBLIC INFORMATION </span><span> · </span><span>INDEPENDENT COPYRIGHT INFRASTRUCTURE</span></div>
      </div>
    </section>
    <section className="public-content section-wrap">
      <aside className="public-sidebar">
        <div className="public-sidebar-title"><small>PUBLIC WEBSITE</small><b>{category.title}</b></div>
        {category.items.map(item => <Link key={item.slug} className={selected?.slug===item.slug?'active':''} to={'/'+category.key+'/'+item.slug}>{item.title}<ArrowUpRight size={14}/></Link>)}
        <Link className="public-sidebar-back" to="/">전체 메뉴로 돌아가기 <ArrowRight size={14}/></Link>
      </aside>
      <div className="public-main">
        <div className="public-main-heading"><div className="section-kicker">{selected ? selected.en : category.eyebrow}</div><h2>{selected ? '핵심 안내' : '서비스 안내'}</h2><p>{description}</p></div>
        <div className="public-points">{(selected?.points ?? ['TCS는 권리정보와 이용기록, 정산 근거를 연결하는 공통 인프라입니다.','각 참여자는 독립적인 역할과 데이터 영역을 유지합니다.','세부 업무는 관련 규정·계약·권한 범위에 따라 처리합니다.']).map((point,i)=><article className="public-point" key={i}><span>0{i+1}</span><p>{point}</p></article>)}</div>
        {!selected && <div className="public-child-grid">{category.items.map((item,i)=><Link className="public-child-card" to={'/'+category.key+'/'+item.slug} key={item.slug}><small>0{i+1} / {item.en}</small><h3>{item.title}</h3><p>{item.desc}</p><span>상세 안내 <ArrowUpRight size={15}/></span></Link>)}</div>}
        {selected && <div className="public-detail-panel"><div><div className="section-kicker">RELATED INFORMATION</div><h3>함께 확인할 항목</h3><p>이 안내는 TCS의 공통 관리 원칙을 설명하는 시연 화면입니다. 실제 신청·계약·정산 및 자료 제출은 공식 규정과 권한 확인 절차가 연결된 뒤 제공됩니다.</p></div><Link className="primary-button" to={'/'+category.key}> {category.title} 전체 보기 <ArrowRight size={16}/></Link></div>}
      </div>
    </section>
  </main>
}

const pageContent: Record<string, { eyebrow: string; title: string; desc: string }> = {
  about: { eyebrow: 'ABOUT TCS', title: '독립적이고 개방적인\n저작권 관리 인프라', desc: 'TCS의 역할과 운영 원칙, 글로벌 음악저작권 관리 체계를 소개합니다.' },
  copyright: { eyebrow: 'COPYRIGHT MANAGEMENT', title: '창작자의 권리를\n정확하게 연결합니다', desc: '저작물 등록, 권리정보, 이용내역, 징수와 분배에 관한 관리 체계입니다.' },
  membership: { eyebrow: 'MEMBERSHIP', title: '회원과 신탁 안내', desc: '회원 유형, 신탁계약, 가입 자격과 절차를 안내합니다.' },
  network: { eyebrow: 'PLATFORM NETWORK', title: '독립 플랫폼을 위한\n공통 연동 인프라', desc: '음원 유통사와 음악 이용사업자는 독립성을 유지하면서 표준 API로 TCS에 연결됩니다.' },
  finance: { eyebrow: 'COPYRIGHT FINANCE', title: '저작권 수입을 기반으로\n창작자의 금융 기회를', desc: '저작권료 지급채권 및 지속적인 저작권 수입 실적을 바탕으로 금융기관과 연계합니다.' },
  global: { eyebrow: 'GLOBAL NETWORK', title: '국경을 넘어 연결되는\n저작권 관리', desc: '국가별 관리단체 및 국제 정산 네트워크와의 협력 기반을 구축합니다.' },
  login: { eyebrow: 'SECURE ACCESS', title: 'TCS 통합 로그인', desc: '부여된 권한에 따라 이용 가능한 업무 포털로 안전하게 접속합니다.' },
  contact: { eyebrow: 'CONTACT TCS', title: '협력 및 연동 문의', desc: '플랫폼 연동, 기관 협력 및 서비스 관련 문의를 접수합니다.' },
}
function InfoPage({ type }: { type: string }) {
  const data = pageContent[type] ?? { eyebrow: 'TCS PORTAL', title: '업무 포털', desc: '권한에 따라 제공되는 TCS 업무 공간입니다.' }
  return <main className="subpage"><div className="subpage-hero"><div className="section-kicker">{data.eyebrow}</div><h1>{data.title.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</h1><p>{data.desc}</p><Link className="primary-button" to="/login">로그인 및 이용 안내 <ArrowUpRight size={16}/></Link></div><div className="section-wrap subpage-body"><div className="notice-card"><ShieldCheck size={22}/><div><b>서비스 구축 단계</b><p>이 페이지는 전체 정보구조와 화면 설계를 위한 초기 프론트엔드입니다. 세부 규정과 실제 업무 데이터는 확인된 기준 및 백엔드 연동 계약에 따라 순차적으로 연결합니다.</p></div></div></div></main>
}


function LoginPage() {
 const choices = [
  {key:'creator',title:'창작자 포털',desc:'저작물·권리·이용내역·저작권료 관리'},
  {key:'association',title:'협회 관리자',desc:'회원·신탁·권리·징수·분배 관리'},
  {key:'partner',title:'유통사·음악 이용사업자',desc:'저작물·이용정보·정산·API 연동'},
  {key:'finance',title:'금융기관 제휴 포털',desc:'수입 확인·대출 심사·상환 연계'},
  {key:'global',title:'글로벌 네트워크',desc:'국가별 관리·국제 협력·글로벌 정산'}
 ]
 return <main className="login-page"><div className="login-page-inner"><div className="section-kicker">SECURE ROLE-BASED ACCESS</div><h1>TCS 통합 접속</h1><p>사용자 역할에 해당하는 업무 공간을 선택합니다. 실제 계정 인증과 권한 검증은 백엔드 연동 단계에서 연결됩니다.</p><div className="login-demo-notice">시연 모드 · 실제 로그인·회원 인증 기능은 아직 연결되지 않았습니다.</div><div className="login-role-grid">{choices.map(item=><Link key={item.key} to={'/portal/'+item.key}><small>ROLE WORKSPACE</small><h2>{item.title}</h2><p>{item.desc}</p><span>업무 공간 둘러보기 <ArrowUpRight size={15}/></span></Link>)}</div><Link className="login-home-link" to="/">TCS HOME으로 돌아가기 <ArrowRight size={15}/></Link></div></main>
}

export default function App() {
  const [language, setLanguage] = useState<Language>('KR')
  const location = useLocation()
  return <Shell language={language} setLanguage={setLanguage}><Routes>
    <Route path="/" element={<Home language={language}/>} />
    <Route path="/home" element={<PublicPage categoryKey="home"/>}/>
    <Route path="/home/:slug" element={<PublicPage categoryKey="home"/>}/>
    {publicCategories.filter(item => item.key !== 'home').map(item => <Route key={item.key} path={'/'+item.key} element={<PublicPage categoryKey={item.key}/>}/>)}
    {publicCategories.filter(item => item.key !== 'home').map(item => <Route key={item.key+'-child'} path={'/'+item.key+'/:slug'} element={<PublicPage categoryKey={item.key}/>}/>)}
    <Route path="/about" element={<Navigate to="/home/tcs-intro" replace/>}/>
    <Route path="/network" element={<Navigate to="/business/distributors" replace/>}/>
    <Route path="/contact" element={<Navigate to="/support/contact" replace/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/portal/:portalKey" element={<PortalPage/>}/>
    <Route path="/portal/:portalKey/:section" element={<PortalPage/>}/>
    <Route path="/portal/:portalKey/:section/:child" element={<PortalPage/>}/>
    <Route path="/portal/*" element={<InfoPage type="portal"/>}/>
    {Object.keys(pageContent).map(key => <Route key={key} path={'/' + key} element={<InfoPage type={key}/>} />)}
    <Route path="*" element={<InfoPage type={location.pathname.split('/').filter(Boolean).pop() ?? 'about'}/>} />
  </Routes></Shell>
}
