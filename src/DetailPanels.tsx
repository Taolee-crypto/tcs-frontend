import { ArrowRight, CheckCircle2, ClipboardList, FileCheck2, LockKeyhole, Network, ShieldCheck } from 'lucide-react'

type PublicDetailProps = {
  categoryKey: string
  title: string
  en: string
  description: string
  points: string[]
}

const publicGuides: Record<string, { purpose: string; workflow: string[]; records: string[]; safeguards: string[] }> = {
  home: { purpose: 'TCS가 연결하는 권리정보·이용기록·정산 데이터의 전체 구조를 이해하는 안내입니다.', workflow: ['참여 주체와 역할 확인', '공통 데이터 및 연동 기준 확인', '권리·이용·정산 흐름 연결'], records: ['권리자 및 저작물 식별정보', '원천 이용기록과 검증 상태', '적용 정책 및 정산 근거'], safeguards: ['TCS는 음원 유통·판매를 직접 수행하지 않습니다.', '독립 플랫폼별 고객·영업·정산 데이터는 분리합니다.'] },
  copyright: { purpose: '저작물과 권리관계의 확인에서 이용정보 검증, 사용료 산정, 분배와 지급까지 이어지는 관리 절차입니다.', workflow: ['저작물·권리자 식별 및 근거 확인', '이용정보 수집·중복·누락 검증', '협회 정책에 따른 산정·징수·분배 처리'], records: ['저작물 ID·권리자·지분·관리범위', '이용일시·매체·사업자·이용시간', '산정 버전·승인 이력·지급 상태'], safeguards: ['예상액·확정액·지급예정액·지급완료액을 구분합니다.', 'TL 이용량과 법적으로 확정된 원화 사용료를 혼동하지 않습니다.'] },
  membership: { purpose: '회원 유형, 자격 확인, 신탁계약과 권리관리 관계를 각각 구분해 안내합니다.', workflow: ['신청 유형 및 본인·사업자 확인', '현행 정관·규정에 따른 자격 검토', '신탁 범위 및 계약 상태 별도 확인'], records: ['회원 유형·등급·자격 상태', '신탁계약 당사자·대상·범위·기간', '제출자료·보완요청·심사 이력'], safeguards: ['회원 자격과 신탁계약 상태는 별도 정보입니다.', '정회원 승격·의결권·선거권은 현행 규정에 따라 판단합니다.'] },
  business: { purpose: '독립 유통사와 음악 이용사업자가 동일한 공통 연동 기준으로 TCS에 연결되는 절차입니다.', workflow: ['사업자·서비스 및 데이터 범위 협의', '인증·전송 규격·검증 규칙 테스트', '운영 전환 및 오류·재전송 관리'], records: ['사업자·플랫폼 식별정보', 'API 인증·전송·응답 이력', '이용기록·정산 연동 상태'], safeguards: ['TIMELINK를 포함한 모든 플랫폼은 독립적으로 운영됩니다.', '플랫폼별 고객·영업·마케팅 데이터에 교차 접근하지 않습니다.'] },
  finance: { purpose: '창작자의 저작권 수입정보를 동의와 권한 범위 안에서 금융기관에 검증·연계합니다.', workflow: ['창작자 동의 및 조회 범위 확인', '저작권 수입 실적·지속성·변동성 검증', '금융기관 심사 및 결과 상태 연계'], records: ['수입 기간·확정 상태·지급 이력', '조회 동의·목적·유효기간', '금융기관 요청·응답·접근 이력'], safeguards: ['대출 심사·한도·금리·실행·상환 조건은 금융기관이 결정합니다.', '대출만으로 저작권 소유권이나 기존 신탁권리가 자동 이전되지 않습니다.'] },
  global: { purpose: '국가별 관리체계와 관리단체 사이의 권리정보 및 국제 이용료 정산 연계를 지원합니다.', workflow: ['국가·관리단체·상호관리 범위 확인', '저작물·권리·이용정보 매핑', '국가별 검증·정산 결과 대사'], records: ['국가·통화·관리단체 식별정보', '상호관리계약 및 권리 범위', '국제 이용·징수·분배·송금 이력'], safeguards: ['국가별 법률·계약·관리체계 차이를 반영합니다.', '환율·공제·정산 기준은 해당 계약과 공식 자료를 근거로 관리합니다.'] },
  support: { purpose: '공지·자료·문의·민원 및 이용자 권리행사 요청을 접수하고 처리 경과를 안내합니다.', workflow: ['문의 유형 및 접수 경로 선택', '담당 부서 배정 및 자료 확인', '답변·보완·종결 및 이력 보존'], records: ['접수번호·접수일시·문의 유형', '담당자·처리 상태·답변 이력', '첨부자료 및 개인정보 처리 기록'], safeguards: ['민감정보는 문의 해결에 필요한 최소 범위로 처리합니다.', '공식 약관과 개인정보 처리방침은 법률 검토 후 확정합니다.'] },
}

const categoryNames: Record<string, string> = {
  home: 'TCS 핵심 구조', copyright: '권리·이용·정산 관리', membership: '회원·신탁 관리',
  business: '플랫폼·사업자 연동', finance: '저작권 수입 금융 연계', global: '국제 권리·정산 연계', support: '고객지원 업무'
}

export function PublicDetailPanel({ categoryKey, title, en, description, points }: PublicDetailProps) {
  const guide = publicGuides[categoryKey] ?? publicGuides.home
  return <div className="detail-page-content">
    <section className="detail-purpose">
      <div className="detail-icon"><ShieldCheck size={21}/></div>
      <div><small>PAGE PURPOSE · {en.toUpperCase()}</small><h3>{categoryNames[categoryKey] ?? 'TCS 업무 안내'}</h3><p>{guide.purpose}</p></div>
    </section>
    <div className="detail-section-heading"><div><small>01 / PROCESS</small><h3>{title} 진행 구조</h3></div><p>업무 단계와 확인 기준</p></div>
    <div className="detail-process-grid">{guide.workflow.map((step, i) => <article key={step}><span>{String(i + 1).padStart(2, '0')}</span><b>{step}</b>{i < guide.workflow.length - 1 && <ArrowRight size={15}/>}</article>)}</div>
    <div className="detail-two-columns">
      <section className="detail-list-panel"><div className="detail-panel-heading"><ClipboardList size={17}/><h3>관리·확인 항목</h3></div>{guide.records.map((item, i) => <div className="detail-check-row" key={item}><span>{String(i + 1).padStart(2, '0')}</span><p>{item}</p><FileCheck2 size={15}/></div>)}</section>
      <section className="detail-list-panel safeguards"><div className="detail-panel-heading"><LockKeyhole size={17}/><h3>운영 원칙 및 보호 기준</h3></div>{guide.safeguards.map(item => <div className="detail-rule-row" key={item}><CheckCircle2 size={16}/><p>{item}</p></div>)}</section>
    </div>
    <section className="detail-description"><div className="detail-section-heading"><div><small>02 / SCOPE</small><h3>이 페이지에서 다루는 내용</h3></div></div><p>{description}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul></section>
    <div className="detail-prototype-note"><Network size={17}/><p><b>구현 범위 안내</b> 현재 화면은 업무 구조와 데이터 항목을 구체화한 프런트엔드 설계입니다. 실제 신청·조회·승인·정산은 공식 규정, 사용자 권한, 백엔드 API가 연결된 후 활성화됩니다.</p></div>
  </div>
}

type PortalDetailProps = {
  portalTitle: string
  portalKey: string
  sectionTitle: string
  sectionSlug: string
  childTitle?: string
  children: string[]
}

const portalWorkflows: Record<string, string[]> = {
  creator: ['내 정보 및 권리 범위 확인', '관련 저작물·이용·수입 내역 조회', '변경 요청 또는 증빙 제출'],
  association: ['대상 회원·저작물·이용 건 조회', '규정·계약·증빙 및 검증 결과 확인', '권한자 처리·승인 및 감사 이력 기록'],
  partner: ['사업자 인증 및 연동 범위 확인', '저작물·이용 데이터 전송 및 검증', '오류 보완·재전송 및 정산 대사'],
  finance: ['창작자 동의 및 조회 권한 확인', '검증된 저작권 수입정보 요청', '금융기관 심사 결과 및 상태 연계'],
  global: ['국가·관리단체·계약 범위 확인', '국제 권리·이용 데이터 매핑', '상대 기관 대사 및 정산 결과 기록'],
}

const portalDescriptions: Record<string, string> = {
  creator: '창작자 본인에게 허용된 회원·저작물·이용·정산 정보만 조회하고 변경 요청을 제출합니다.',
  association: '협회 담당자의 직무와 승인 권한에 따라 업무를 분리하고 모든 주요 처리를 이력으로 남깁니다.',
  partner: '사업자 계약과 API 권한 범위 안에서 저작물 및 음악 이용정보를 연동합니다.',
  finance: '창작자의 동의가 확인된 저작권 수입정보만 금융기관의 심사 목적에 맞춰 제공합니다.',
  global: '국가별 계약과 권한 범위를 확인한 뒤 국제 권리 및 정산 데이터를 교환합니다.',
}

export function PortalDetailPanel({ portalTitle, portalKey, sectionTitle, sectionSlug, childTitle, children }: PortalDetailProps) {
  const workflow = portalWorkflows[portalKey] ?? portalWorkflows.creator
  const focus = childTitle ?? sectionTitle
  return <div className="portal-detail-workbench">
    <section className="portal-workbench-intro"><div><small>{portalKey.toUpperCase()} / {sectionSlug.toUpperCase()}</small><h3>{focus}</h3><p>{portalDescriptions[portalKey] ?? '역할별 권한과 업무 범위에 따라 정보를 확인합니다.'}</p></div><span className="portal-access-tag"><LockKeyhole size={13}/> 권한 확인 필요</span></section>
    <div className="portal-workbench-stats">
      <article><small>업무 영역</small><b>{sectionTitle}</b><span>현재 선택한 메뉴</span></article>
      <article><small>세부 관리 항목</small><b>{children.length}개</b><span>등록된 메뉴 기준</span></article>
      <article><small>데이터 상태</small><b>연동 대기</b><span>실제 운영 데이터 미연결</span></article>
    </div>
    <div className="portal-workbench-grid">
      <section className="portal-workbench-card"><div className="portal-workbench-card-title"><ClipboardList size={17}/><h4>업무 처리 절차</h4></div>{workflow.map((step, i) => <div className="portal-work-step" key={step}><span>{String(i + 1).padStart(2, '0')}</span><p>{step}</p></div>)}</section>
      <section className="portal-workbench-card"><div className="portal-workbench-card-title"><ShieldCheck size={17}/><h4>접근·처리 기준</h4></div><ul><li>로그인 사용자와 역할을 확인한 뒤 접근을 허용합니다.</li><li>업무 목적에 필요한 최소 데이터만 표시합니다.</li><li>조회·등록·수정·승인 권한을 구분합니다.</li><li>중요한 변경과 승인 결과는 처리 이력으로 보존합니다.</li></ul></section>
    </div>
    <section className="portal-workbench-menu"><div className="portal-workbench-card-title"><FileCheck2 size={17}/><h4>{sectionTitle} 세부 업무</h4></div><div className="portal-workbench-menu-grid">{children.map((name, i) => <div className={name === childTitle ? 'portal-workbench-menu-item active' : 'portal-workbench-menu-item'} key={name}><span>{String(i + 1).padStart(2, '0')}</span><b>{name}</b>{name === childTitle && <small>선택됨</small>}</div>)}</div></section>
    <div className="portal-workbench-footnote"><LockKeyhole size={16}/><p><b>{portalTitle} 전용 화면</b> · 실제 회원정보, 권리정보, 금액, 심사 결과를 임의로 표시하지 않습니다. 인증·API·권한 정책이 연결되면 해당 역할의 실제 데이터와 처리 기능으로 전환합니다.</p></div>
  </div>
}
