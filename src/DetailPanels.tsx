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
  global: { purpose: '국가별 저작권협회나 상호관리계약을 글로벌 정산의 필수 전제로 두지 않고, 공통 TL 정산과 창작자별 세금 공제·지급을 연결합니다.', workflow: ['독립 플랫폼의 이용기록을 공통 TL로 환산', '창작자별 TL 배분 및 정산 확정', '최종 지급 단계에서 납세 관할별 세금 공제'], records: ['창작자 국적·세법상 거주지·납세 관할', '플랫폼별 TL 발생·배분·정산 내역', '공제 전 금액·세금 공제액·최종 지급액 및 증빙'], safeguards: ['국적과 세법상 거주지·납세 관할을 동일한 정보로 취급하지 않습니다.', '세율은 소득 유형·지급 구조·조세조약 및 현지 법령을 확인한 뒤 적용합니다.', 'TL 정산과 세금 계산을 분리하고 실제 법적 지급 단계에서 공제 근거를 기록합니다.'] },
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

type PortalModuleGuide = {
  purpose: string
  steps: string[]
  access: string[]
  records: string[]
  outputs: string[]
}

const portalModuleGuides: Record<string, PortalModuleGuide> = {
  'creator:dashboard': { purpose:'창작자 본인의 회원·계약·저작물·이용·정산 상태를 하나의 화면에서 확인합니다.', steps:['본인 계정과 조회 권한 확인','회원·신탁·저작물·수입 데이터의 기준일 확인','변경 요청이나 이의신청이 필요한 항목으로 이동'], access:['본인에게 연결된 데이터만 조회','금액은 예상·확정·지급 상태를 구분','타 권리자의 개인정보와 비공개 계약정보는 표시하지 않음'], records:['회원 자격 및 신탁 상태','저작물 수와 권리정보 갱신일','이용·정산 기간 및 지급 상태'], outputs:['개인 업무 현황','확인 필요 항목','관련 상세 메뉴 바로가기'] },
  'creator:membership': { purpose:'창작자의 회원 유형과 자격 상태, 신청 및 변경 이력을 관리합니다.', steps:['본인 확인 및 현재 회원 유형 조회','현행 정관·규정에 따른 자격 자료 확인','변경·승격 신청과 심사 결과 이력 확인'], access:['회원 유형과 신탁계약 상태를 별도 관리','정회원 권한은 현행 규정으로만 판단','자격 변경은 근거자료와 처리 이력을 보존'], records:['회원번호·가입일·회원 유형','자격 요건 확인 자료','신청·보완·결정 이력'], outputs:['회원 자격 확인 결과','변경 신청 접수 내역','적용 규정 및 결정 근거'] },
  'creator:trust': { purpose:'신탁계약의 당사자·대상 저작물·권리 범위·기간과 변경 상태를 확인합니다.', steps:['계약 당사자 및 본인 확인','계약 대상·권리 범위·제외 항목 확인','변경·해지 신청과 계약 이력 대조'], access:['계약 당사자에게 허용된 계약만 열람','계약서 원문 및 민감정보 접근 제한','회원 등급과 계약 효력은 별도 판단'], records:['계약 식별번호·상태·기간','대상 저작물 및 신탁 권리','변경·해지 문서와 효력 발생일'], outputs:['현재 유효 계약 범위','계약 변경 이력','보완 또는 확인 필요 항목'] },
  'creator:works': { purpose:'본인에게 귀속된 저작물과 권리자·지분·등록 근거를 확인하고 정정 요청을 관리합니다.', steps:['저작물 식별정보로 대상 검색','권리자·지분·관리 범위 및 증빙 대조','등록·수정 요청 제출 및 처리 결과 확인'], access:['본인 권리 및 공개 가능한 메타데이터만 표시','공동 권리자의 개인정보는 권한에 따라 제한','권리 변경은 검증된 증빙과 이력 필수'], records:['저작물명·식별자·버전','권리자·지분·관리 범위','등록 근거 및 정정 이력'], outputs:['저작물별 권리 현황','권리정보 변경 요청','검증 및 보완 상태'] },
  'creator:tl-assets': { purpose:'TL 음악 자산의 창작·원본 증빙과 메타데이터, 플랫폼 연결 상태를 관리합니다.', steps:['자산 식별자와 등록 메타데이터 확인','창작·원본·AI 도구 사용 증빙의 출처 확인','권리·메타데이터 변경 및 플랫폼 연결 이력 점검'], access:['원본 파일은 창작자 보유 원칙을 유지','제출된 증빙과 원본 자체를 구분','자산 변경 전후 버전 및 권한을 기록'], records:['TL 자산 ID·유형·등록 시각','창작·원본·AI 관련 증빙','메타데이터 버전·연동 플랫폼'], outputs:['자산 증빙 목록','검증·보완 상태','연동 및 변경 이력'] },
  'creator:usage': { purpose:'본인 저작물의 음악 이용기록을 기간·매체·사업자별로 조회하고 원천 및 검증 상태를 확인합니다.', steps:['조회 기간과 매체·사업자 범위 설정','원천 이용기록 및 검증 상태 확인','누락·중복·오류 의심 건을 정산 이의 절차와 연결'], access:['본인 권리와 연결된 이용기록만 조회','원천 데이터와 정정 데이터 구분','미확정 이용기록을 확정 수입으로 표시하지 않음'], records:['이용 일시·시간·매체','사업자·플랫폼·저작물 식별자','검증·정정·반영 상태'], outputs:['기간별 이용내역','매체·사업자별 집계','확인 요청 대상 기록'] },
  'creator:royalties': { purpose:'저작권료의 예상·확정·지급예정·지급완료 금액과 미분배 및 이의신청 내역을 구분해 확인합니다.', steps:['정산 기간과 정산 상태 선택','이용기록·권리 지분·적용 정책에 따른 명세 확인','지급 상태 확인 또는 이의신청 자료 제출'], access:['예상액과 확정액 및 지급액을 분리','정산 기준일·정책 버전·정정 내역 표시','타 권리자 배분정보는 권한에 따라 제한'], records:['정산 기간·저작물·이용 근거','적용 TL·확정 원화 금액','분배·지급·미분배·정정 상태'], outputs:['정산 명세서','지급 내역 및 증빙','이의신청 접수·처리 이력'] },
  'creator:finance': { purpose:'저작권 수입을 근거로 금융기관에 제공할 수 있는 정보와 신청·심사·상환 연계 상태를 확인합니다.', steps:['금융상품과 제휴기관 및 제공 목적 확인','정보 제공 범위·동의·유효기간 확인','수입 증명 발급 또는 금융기관 심사 상태 확인'], access:['창작자의 명시적 동의 범위에서만 제공','금융기관이 대출 심사·조건·실행을 독립 결정','대출로 저작권 소유권이나 신탁권리가 자동 이전되지 않음'], records:['수입 기간·확정 상태·지급 이력','정보 제공 동의 및 만료일','금융기관 요청·응답·심사 상태'], outputs:['저작권 수입 증명','금융 신청 및 심사 진행 정보','상환 연계 확인 내역'] },
  'creator:global': { purpose:'글로벌 플랫폼에서 발생한 공통 TL 정산과 본인에게 적용된 세금 공제·국제 지급 내역을 확인합니다.', steps:['플랫폼별 TL 발생 및 창작자 배분 내역 확인','정산 확정액과 납세 관할별 공제 근거 확인','최종 지급액·지급 상태·증빙 확인'], access:['TL 정산과 세금 공제를 별도 항목으로 표시','국적과 세법상 거주지·납세 관할 구분','본인에게 적용된 세금·지급 정보만 열람'], records:['플랫폼별 TL 및 창작자 배분','공제 전 정산액·공제액·공제 근거','최종 지급액·통화·지급 증빙'], outputs:['글로벌 TL 정산 명세','세금 공제 내역','국제 지급 및 증빙'] },
  'creator:community': { purpose:'창작자 공지와 커뮤니티 게시글, 문의 및 지원 요청의 진행 상태를 확인합니다.', steps:['공지·게시판·문의 유형 선택','게시 또는 문의 내용과 첨부자료 확인','답변·보완·종결 상태 및 후속 안내 확인'], access:['커뮤니티 공개 범위와 회원 전용 범위 구분','개인정보·권리 분쟁 자료의 공개 게시 제한','운영 정책에 따른 신고·조정 이력 보존'], records:['게시글·공지 분류 및 게시일','문의 접수번호·담당·처리 상태','답변·첨부·수정 이력'], outputs:['공지 및 게시글 목록','문의 답변과 처리 이력','지원 요청 상태'] },
  'association:dashboard': { purpose:'협회 전체 업무량과 회원·계약·권리·이용·징수·분배 처리 대기 현황을 통합 확인합니다.', steps:['기준 기간과 부서·업무 범위 선택','업무별 접수·검증·승인·완료 건수 확인','지연·오류·미처리 항목을 담당 업무로 배정'], access:['부서 및 직무 권한별 통계 노출','개별 회원 민감정보는 업무 상세 권한에서만 접근','집계 기준일과 데이터 완결성 표시'], records:['업무별 접수·처리 상태','기한 초과·보완 대기 항목','운영 지표 및 집계 기준일'], outputs:['통합 업무 현황','처리 대기 목록','기간별 운영 보고'] },
  'association:members': { purpose:'회원 정보와 회원 유형·자격, 가입·변경 신청을 규정과 증빙에 따라 처리합니다.', steps:['회원 식별 및 중복 여부 확인','회원 유형·자격 요건과 제출자료 대조','권한 있는 담당자의 결정 및 통지 이력 기록'], access:['회원 등급과 신탁계약 상태를 분리','승격·의결권은 현행 정관과 규정 근거 필요','개인정보는 직무상 필요한 범위로 제한'], records:['회원 기본정보 및 식별 자료','유형·자격·상태 변경 이력','가입·변경 신청 및 결정 근거'], outputs:['회원 자격 현황','신청 처리 결과','규정·증빙 확인 기록'] },
  'association:trust': { purpose:'신탁계약 등록·조회와 계약 대상·범위·기간 및 변경·해지 이력을 관리합니다.', steps:['계약 당사자·대상 저작물 확인','계약서 및 권리 범위·기간 검증','승인된 계약 상태 반영과 변경 이력 보존'], access:['계약 권한자만 등록·변경','계약 효력과 회원 자격은 분리 판단','계약 원문 열람 및 다운로드 권한 제한'], records:['계약 당사자·계약 식별자','신탁 대상·권리 범위·기간','변경·해지 요청 및 효력 이력'], outputs:['유효 신탁계약 목록','계약 변경·해지 결과','계약 근거 문서'] },
  'association:rights': { purpose:'저작물 식별정보와 권리자·지분 관계를 검증하고 중복·충돌 및 변경 이력을 관리합니다.', steps:['저작물 식별자와 기존 등록정보 대조','권리자·지분·양도·승계 근거 확인','충돌 건 보류·보완 및 승인 결과 반영'], access:['권리 변경은 근거자료와 검토자 기록 필수','분쟁·충돌 정보는 지정 담당자만 열람','확정 전 권리정보를 확정 권리로 표시하지 않음'], records:['저작물 식별자·메타데이터','권리자·지분·관리 범위','양도·승계·분쟁·정정 근거'], outputs:['검증된 권리 레코드','충돌·중복 검토 목록','권리 변경 감사 이력'] },
  'association:usage': { purpose:'플랫폼에서 수신한 음악 이용기록을 검증하고 이용 유형 분류 및 오류·누락·중복을 처리합니다.', steps:['원천 플랫폼·전송 배치·파일 무결성 확인','필수 필드·시간·식별자·중복 여부 검증','오류 분류·보완 요청·재처리 결과 확정'], access:['원천 제출 데이터와 정정본 구분','검증 규칙 및 버전 기록','검증 완료 전 징수·분배 기준으로 확정하지 않음'], records:['플랫폼·배치·제출 시각','이용 일시·시간·매체·저작물 식별자','검증 오류·재전송·정정 이력'], outputs:['검증 통과 이용기록','오류·누락·중복 처리 결과','산정 대상 이용량'] },
  'association:tl-index': { purpose:'협회가 설정한 매체·이용 유형별 TL 적용지수와 변경 승인·적용 이력을 통제합니다.', steps:['현재 적용지수와 적용 대상 조회','변경 사유·근거·시행일·영향 범위 검토','승인된 버전만 지정 시행일부터 적용'], access:['TCS가 협회 정책지수를 임의 결정하지 않음','변경 신청자와 승인자 역할 분리','소급 변경 방지 및 모든 버전 보존'], records:['기본 TL 산식 및 적용지수','매체·이용 유형·시행 기간','변경 사유·승인자·감사 로그'], outputs:['현재 유효 적용지수','정책 변경 이력','적용 대상 정산 기준'] },
  'association:collection': { purpose:'검증된 이용기록과 승인된 정책에 따른 사용료 산정 근거, 청구·수납 및 미수 상태를 관리합니다.', steps:['산정 대상 이용기록과 권리 범위 확정','적용지수·산정 버전으로 청구 근거 생성','청구·수납·미수·정정 내역 대사'], access:['TL 이용량과 확정 원화 사용료 분리','청구·수납 금액 수정은 승인과 근거 필수','협회 수수료와 TCS 이용료 구분'], records:['산정 기간·이용량·적용지수','청구 대상·청구서·납부 기한','수납·미수·환불·정정 이력'], outputs:['사용료 산정 명세','청구·수납 현황','미수 및 정정 보고'] },
  'association:distribution': { purpose:'확정된 사용료와 권리자별 지분을 바탕으로 분배 산정·지급 승인·미분배를 관리합니다.', steps:['분배 대상 수입과 정산 기준 확정','권리자·지분·공제 항목 검증 및 배분','지급 승인·실행 결과와 미분배 사유 기록'], access:['분배 산식·권리 기준일·공제 내역 공개 가능 수준 관리','산정·승인·지급 역할 분리','지급 전후 정정 이력 보존'], records:['확정 수입·분배 대상 기간','권리자·지분·배분액·공제액','지급 계정·승인·실행·미분배 상태'], outputs:['권리자별 분배 명세','지급 승인 및 결과','미분배·정정 처리 목록'] },
  'association:finance': { purpose:'금융기관의 창작자 동의와 요청 목적을 확인하고 저작권 수입 데이터 검증·증명 이력을 관리합니다.', steps:['금융기관 계약·요청자·창작자 동의 검증','요청 범위 내 확정 수입·지급 데이터 대조','증명 제공 및 접근·만료 이력 기록'], access:['동의 목적·항목·기간 범위 초과 제공 금지','금융기관 심사·대출 결정에 관여하지 않음','기관별 데이터 접근을 분리하고 감사 로그 보존'], records:['기관 계약·사용자 권한','창작자 동의·요청 목적·유효기간','검증 데이터·증명서·접근 이력'], outputs:['수입 검증 결과','증명서 발급 이력','동의·접근 감사 기록'] },
  'association:integrations': { purpose:'독립 플랫폼의 계약과 API 자격, 이용기록 수신·검증 및 연동 비용 정보를 관리합니다.', steps:['플랫폼 실체·계약 범위·담당자 확인','API 인증·테스트·데이터 규격 검증','운영 연동·장애·정산·비용 이력 관리'], access:['모든 참여 플랫폼에 동일한 기본 연동 기준','플랫폼별 고객·영업·마케팅 데이터 분리','인증키 발급·회수와 권한 변경 이력 보존'], records:['플랫폼 ID·계약·서비스 범위','API 키 상태·전송·응답 로그','연동 이용료·청구·수납 정보'], outputs:['플랫폼 연동 상태','기술·보안 이슈 목록','계약·비용 관리 기록'] },
  'association:global': { purpose:'공통 TL 글로벌 정산과 창작자별 납세 관할 정보, 지급 단계의 세금 공제 정책을 관리합니다.', steps:['글로벌 플랫폼 이용기록 및 TL 환산 결과 확인','창작자별 권리·배분·정산 확정','적법한 세율 근거 확인 후 공제·국제 지급 처리'], access:['국가별 저작권협회·상호관리계약을 필수 전제로 두지 않음','TL 배분과 세금 공제·지급을 별도 계층으로 관리','세율 변경은 공식 근거·시행일·검토 승인 필요'], records:['플랫폼별 TL 발생·창작자별 배분','납세 관할·소득 유형·세율 근거','공제 전 금액·공제액·최종 지급·증빙'], outputs:['글로벌 TL 정산 명세','세금 공제 적용 이력','국제 지급 및 감사 기록'] },
  'association:management': { purpose:'협회 업무 통계와 수수료·비용 및 운영 보고서를 내부 경영 기준에 따라 관리합니다.', steps:['보고 기간·부서·업무 지표 선택','집계 원천과 비용 항목 검증','결재 권한에 따른 보고서 확정·보관'], access:['경영·재무 자료는 지정된 임원·담당자만 접근','집계 기준과 원천 데이터 연결 유지','개인별 민감정보는 통계 보고에서 최소화'], records:['업무 처리량·기간별 지표','수수료·운영비·예산 항목','보고서 버전·작성자·승인자'], outputs:['경영 현황 보고','비용·수수료 집계','내부 의사결정 자료'] },
  'association:system': { purpose:'사용자·역할·권한과 보안 설정, 기준정보 및 시스템 감사 로그를 관리합니다.', steps:['사용자 신원·소속·직무 확인','최소 권한 부여 및 변경 승인','접근·설정 변경·중요 처리 로그 점검'], access:['관리자 권한과 업무 처리 권한 분리','권한 부여·회수 이중 확인','로그 위변조 방지 및 보존 정책 적용'], records:['사용자·역할·권한 매핑','접속·인증·권한 변경 로그','기준정보·시스템 설정 버전'], outputs:['권한 현황 및 검토 결과','보안 이벤트 목록','감사·설정 변경 이력'] },
  'partner:dashboard': { purpose:'사업자별 API 연동, 데이터 제출, 검증 결과와 정산 교환 상태를 한눈에 확인합니다.', steps:['계약된 플랫폼·서비스 범위 선택','최근 제출 배치와 검증 응답 확인','오류·재전송 및 정산 확인 업무로 이동'], access:['사업자 본인 소속 데이터만 조회','타 플랫폼 고객·영업 데이터 접근 금지','제출·수정·재전송 이력 보존'], records:['API 연결 및 인증 상태','제출 배치·검증 결과','정산 데이터 교환 상태'], outputs:['연동 운영 현황','오류·재처리 대기 목록','최근 제출 결과'] },
  'partner:business': { purpose:'사업자 법인·서비스 정보와 계약 범위, 담당자 및 역할별 접근 권한을 관리합니다.', steps:['사업자 식별·담당자 인증','계약된 서비스·매체·지역 범위 확인','담당자 변경 및 권한 승인 이력 반영'], access:['계약 범위 밖 서비스 데이터 제출 제한','담당자별 최소 권한 적용','계약 변경은 승인 및 효력일 기록'], records:['사업자 식별정보·서비스 정보','계약·기간·적용 범위','담당자·역할·접근 권한'], outputs:['사업자 프로필','유효 계약 범위','사용자 권한 현황'] },
  'partner:works': { purpose:'플랫폼 저작물 식별정보와 TCS 권리 메타데이터를 매핑하고 불일치 항목을 확인합니다.', steps:['플랫폼 원천 식별자·메타데이터 제출','TCS 저작물 ID 및 권리정보 후보 매핑','불일치·중복 검토와 수정 결과 재확인'], access:['플랫폼 자체 카탈로그와 TCS 권리 원장 구분','권리정보 확정은 권한 있는 관리 주체가 수행','매핑 변경 전후 이력 보존'], records:['플랫폼 작품 ID·ISRC 등 식별정보','TCS 작품 ID·메타데이터 매핑','매핑 신뢰도·오류·변경 이력'], outputs:['매핑 결과 목록','불일치 및 보완 대상','권리정보 조회 결과'] },
  'partner:usage': { purpose:'음악 이용 사업자가 이용기록을 제출하고 형식·필수값·중복 검증 및 재전송을 관리합니다.', steps:['이용기간·매체·사업장 또는 서비스 범위 확인','이용기록 파일/API 제출 및 수신 응답 확인','검증 오류 수정·재전송 후 처리 결과 대조'], access:['원천 기록과 수정 제출본을 구분','제출 사업자와 제출 책임자 추적','검증 완료 전 확정 이용량으로 간주하지 않음'], records:['이용일시·재생시간·저작물 식별자','매체·서비스·사업장·이용 유형','배치 ID·검증 오류·재전송 결과'], outputs:['수신 확인 및 검증 결과','오류별 수정 가이드','정산 대상 이용기록'] },
  'partner:settlement': { purpose:'이용량 및 TL 산정 결과, 청구·수납 정보와 정산 자료 교환 내역을 확인합니다.', steps:['이용기록 검증 완료 여부 확인','기본 TL·협회 적용지수·산정 버전 대조','청구·수납 및 정산 자료 교환 결과 확인'], access:['1초=1 TL 기본 원칙과 적용지수 구분','협회가 설정한 적용지수 외 임의 가치 변경 금지','TL과 확정 원화 사용료 별도 표시'], records:['이용시간·기본 TL·적용지수','산정 버전·청구 금액·수납 상태','정산 파일·대사 결과·정정 이력'], outputs:['이용량·TL 산정 명세','청구·수납 대사 결과','정산 자료 교환 기록'] },
  'partner:api': { purpose:'API 사양·인증·테스트 환경과 장애 대응 절차를 확인하고 플랫폼 연동을 운영합니다.', steps:['API 버전·요청 스키마·인증 방식 확인','테스트 환경에서 정상·오류 응답 검증','운영키 발급·장애 접수·재시도 정책 확인'], access:['인증키는 담당자·환경별 분리','비밀키 원문 노출 금지 및 주기적 회전','요청률 제한·접근 로그·키 폐기 기록'], records:['API 버전·엔드포인트·스키마','인증키 ID·권한·만료 상태','요청·응답 코드·장애·재시도 로그'], outputs:['연동 명세 및 테스트 결과','인증·접근 권한 현황','장애 처리 및 변경 이력'] },
  'partner:contracts': { purpose:'플랫폼 이용계약과 시스템 이용료·연동 수수료, 청구·납부 이력을 확인합니다.', steps:['계약 당사자·서비스 범위·효력 기간 확인','이용료·연동 수수료의 계약 근거 확인','청구서·납부·정정 이력 대사'], access:['TCS 이용료와 협회 관리수수료 별도 구분','계약 외 비용 임의 부과 금지','창작자 부담 중복 여부 사전 검토'], records:['계약 버전·서비스 범위·기간','요금 항목·산정 근거·청구서','납부·미수·환불·정정 기록'], outputs:['유효 계약 및 요금표','청구·납부 현황','비용 정정 이력'] },
  'finance:dashboard': { purpose:'금융기관별 동의 기반 수입 확인 요청과 심사 진행, 최근 처리 이력을 확인합니다.', steps:['기관·담당자 권한과 조회 목적 확인','동의 유효 요청 및 미처리 건 확인','심사 상태·처리 지연·완료 결과 대사'], access:['해당 금융기관 소속 데이터만 접근','창작자 동의 범위 초과 조회 금지','대출 심사 결정과 TCS 데이터 검증 역할 분리'], records:['기관별 요청 건수·상태','동의 만료·보완 대기 항목','조회·응답·처리 이력'], outputs:['기관 업무 현황','심사 요청 대기 목록','처리 결과 보고'] },
  'finance:institutions': { purpose:'제휴 금융기관의 기관정보·담당자·계약 및 데이터 접근 권한을 관리합니다.', steps:['기관 법적 실체 및 제휴계약 확인','담당자 신원·직무·접근 범위 등록','권한 변경·계약 만료·회수 이력 점검'], access:['기관별 논리적 데이터 분리','담당자 직무에 따른 최소 권한','계약 종료 시 토큰·권한 즉시 회수'], records:['기관 식별·계약·효력 기간','담당자·직무·인증 정보','권한 부여·회수·접근 로그'], outputs:['제휴기관 목록','담당자 권한 현황','계약·접근 감사 기록'] },
  'finance:income': { purpose:'창작자 동의에 근거해 권리·저작권 수입·지급 데이터를 확인하고 증명 요청을 처리합니다.', steps:['창작자 본인 및 제공 동의의 유효성 확인','요청 기간·항목과 확정 수입 데이터 대조','검증 결과·증명서 및 제공 이력 기록'], access:['동의한 항목·기간·목적만 제공','예상 수입과 확정·지급 수입 구분','금융기관에 불필요한 권리·개인정보 제공 금지'], records:['동의 ID·목적·항목·만료일','확정 수입·지급 기간·정정 내역','증명 요청·응답·발급 버전'], outputs:['권리·수입 검증 결과','증명서 및 유효기간','정보 제공 이력'] },
  'finance:review': { purpose:'창작자의 동의 범위 내 검증자료를 전달하고 금융기관의 심사 요청·상태 회신을 연계합니다.', steps:['심사 대상·동의·요청 데이터 범위 확인','검증된 수입정보와 증빙 전달','금융기관 심사 상태 및 추가 요청 기록'], access:['TCS는 신용평가·대출 승인·금리를 결정하지 않음','금융기관은 제공 목적 내 자료만 사용','심사 결과 접근을 해당 기관 담당자로 제한'], records:['심사 요청 ID·창작자 동의','제공 자료·전달 시각·수신 확인','심사 상태·보완 요청·결과 회신'], outputs:['심사 자료 전달 확인','진행 상태·보완 요청','기관 회신 이력'] },
  'finance:collateral': { purpose:'담보로 제공될 수 있는 지급채권 등 권리의 확인자료와 상환 재원·지급 연계 상태를 관리합니다.', steps:['담보 대상 권리의 법적 성격·양도 제한 확인','금융기관 요청에 따른 권리·지급 정보 검증','상환 재원 및 지급 연계 상태와 변경 이력 기록'], access:['저작권 자체가 자동으로 담보 가능하다고 간주하지 않음','담보 설정 적격성은 금융기관과 법률 검토로 판단','대출만으로 신탁권리·소유권 자동 이전 금지'], records:['담보 대상 지급채권 식별정보','권리 제한·계약·우선순위 확인','상환 일정·지급 연계·상태 이력'], outputs:['담보 관련 확인 자료','상환 연계 현황','변경·해제 기록'] },
  'finance:reports': { purpose:'기관별 수입 확인·심사 연계 실적과 보고서, 접근·감사 이력을 관리합니다.', steps:['보고 기간·기관·업무 유형 선택','요청·제공·처리 원천 데이터 집계','보고서 확정 및 감사 증빙 보존'], access:['기관별 정보 분리 및 보고 권한 확인','개인별 금융정보는 목적에 맞게 비식별 집계','보고서 다운로드·제공 이력 기록'], records:['기관별 요청·처리 건수','수입 확인·심사 연계 상태','보고서 버전·생성자·접근 이력'], outputs:['금융 연계 통계','기관별 운영 보고','감사·접근 이력'] },
  'global:dashboard': { purpose:'글로벌 플랫폼·창작자별 TL 정산량과 세금 공제·국제 지급 상태를 통합 확인합니다.', steps:['정산 기간·플랫폼·지급 관할 범위 선택','TL 발생·배분·정산 확정 상태 대조','세금 공제·지급 보류·완료 내역 확인'], access:['국가별 협회 연계가 아닌 공통 TL 기준','정산과 세금·현금 지급 계층 분리','국가·창작자 민감정보는 업무 권한에 따라 제한'], records:['플랫폼별 TL 발생 및 배분','창작자별 정산 확정 금액','공제·지급 상태 및 기준일'], outputs:['글로벌 TL 현황','세금 공제 대기 목록','국제 지급 현황'] },
  'global:creators': { purpose:'글로벌 창작자의 프로필·권리·지분과 세법상 거주지·납세 관할 및 지급 계정을 관리합니다.', steps:['창작자 식별·권리자 정보 확인','국적·거주지·납세 관할 증빙을 각각 확인','권리·지분 및 지급 계정 검증·갱신'], access:['국적과 세법상 거주지 구분','세금정보는 지급·법적 의무 목적에 한해 제한 접근','지급 계정 변경은 본인확인·이중검증'], records:['창작자 ID·국적·연락 정보','세법상 거주지·납세 관할·증빙 유효기간','권리 지분·지급 계정·변경 이력'], outputs:['창작자 글로벌 프로필','세금정보 검증 상태','권리·지급 계정 이력'] },
  'global:platforms': { purpose:'독립 플랫폼의 참여 상태와 연동 규격, 이용기록 및 공통 TL 발생 데이터를 연결합니다.', steps:['플랫폼 계약·서비스·데이터 범위 확인','공통 스키마·인증·이용기록 제출 검증','TL 환산 결과·오류·연동 상태 대사'], access:['플랫폼별 고객·영업·마케팅 데이터 분리','필요한 이용·권리 데이터만 계약 범위 내 교환','참여 플랫폼에 동일한 기본 연동 조건 적용'], records:['플랫폼 식별자·계약·지역','API 버전·이용기록·검증 상태','TL 발생·정정·연동 이력'], outputs:['참여 플랫폼 목록','플랫폼별 TL 발생 내역','연동 품질·오류 보고'] },
  'global:settlement': { purpose:'플랫폼 이용기록을 공통 TL로 환산하고 권리·기여 관계에 따라 창작자별 정산을 확정합니다.', steps:['이용기록 검증과 기본 TL 환산','권리·지분·기여 관계를 반영한 배분','정산 버전·근거 확정 및 지급 계층으로 전달'], access:['공통 TL 단위와 플랫폼 원천 기록 연결','배분 기준·권리 기준일·정정 이력 보존','세금 공제 전 정산 결과를 별도 관리'], records:['플랫폼별 이용시간·기본 TL','권리·기여 배분율·창작자별 TL','정산 버전·확정일·정정 사유'], outputs:['플랫폼별 TL 산정표','창작자별 배분 명세','확정 정산 결과'] },
  'global:tax': { purpose:'실제 지급 단계에서 창작자별 납세 관할·소득 유형·조세조약 등에 따른 세금 공제 근거를 관리합니다.', steps:['세법상 거주지·납세 관할 및 증빙 유효성 확인','소득의 법적 성격·지급자·조세조약 검토','승인된 세율 적용·공제액 산정 및 근거 보존'], access:['국적만으로 세율을 결정하지 않음','공식 법령·조세조약·세무 검토가 확인된 정책만 적용','세율·정책 변경은 시행일·검토자·승인 이력 필수'], records:['납세 관할·거주지 증빙·유효기간','소득 유형·지급 구조·조세조약 근거','세율·공제액·적용일·검토·승인 이력'], outputs:['창작자별 세금 적용 결과','원천징수·공제 명세','정책 근거 및 변경 이력'] },
  'global:payments': { purpose:'공제 전 정산액과 세금 공제액, 최종 지급액을 분리해 국제 지급·증빙을 관리합니다.', steps:['확정 TL 정산 및 지급 대상 금액 확인','세금 공제액·통화·지급 수단·수취인 검증','지급 실행 결과·실패·재지급·증빙 기록'], access:['정산 원장과 지급 원장을 분리','수취인 계정 변경은 강화된 본인확인','지급 승인·실행·취소 역할 분리'], records:['공제 전 정산액·통화·환산 기준','세금 공제액·근거·최종 지급액','지급 참조번호·상태·증빙·재처리 이력'], outputs:['국제 지급 명세서','세금 공제 증빙','지급 완료·실패·재처리 결과'] },
}

function taskIntent(title: string) {
  if (/현황|목록|검색|조회|내역|통계|보고/.test(title)) return { verb:'조회·대사', action:'검색 조건과 기준일을 지정해 해당 데이터의 상태 및 원천 근거를 확인합니다.', result:'조회 결과와 기준일이 표시되고, 확인이 필요한 항목은 해당 원장·이력으로 연결됩니다.' }
  if (/신청|요청|이의|문의|접수/.test(title)) return { verb:'신청·접수', action:'요청자와 대상, 신청 사유 및 필수 증빙을 확인한 뒤 접수 상태를 기록합니다.', result:'접수번호와 담당 부서, 보완 요청 및 처리 단계가 이력으로 남습니다.' }
  if (/승인|심사|검토|검증|확인/.test(title)) return { verb:'검토·승인', action:'제출 자료와 정책·계약 근거를 대조하고 검토 결과 및 승인 권한을 확인합니다.', result:'검증 결과, 보완 사유, 승인자와 결정 시각이 기록됩니다.' }
  if (/지급|상환|분배|징수|수납|청구/.test(title)) return { verb:'금액·지급 처리', action:'확정된 원천 금액과 권리·계약·공제 근거를 대조하고 승인된 처리 결과를 반영합니다.', result:'금액 명세, 처리 상태, 지급·수납 증빙 및 정정 이력이 연결됩니다.' }
  if (/계약|약관|기간|범위/.test(title)) return { verb:'계약·범위 관리', action:'계약 당사자와 적용 대상, 권리·서비스 범위, 효력 기간 및 변경 근거를 확인합니다.', result:'유효 계약 범위와 버전, 변경·해지 이력이 보존됩니다.' }
  if (/권한|사용자|담당자|계정|키|보안/.test(title)) return { verb:'권한·접근 관리', action:'사용자 신원과 소속·직무를 확인하고 필요한 최소 권한을 부여하거나 회수합니다.', result:'권한 변경 승인과 접근·보안 감사 로그가 남습니다.' }
  if (/등록|수정|변경|관리|매핑|연동/.test(title)) return { verb:'등록·변경 관리', action:'대상 식별정보와 변경 근거를 확인하고 검증된 정보만 새 버전으로 반영합니다.', result:'변경 전후 값과 근거자료, 담당자 및 반영 시각이 기록됩니다.' }
  return { verb:'업무 확인', action:'대상과 업무 범위를 확인하고 관련 원천 자료 및 적용 기준을 대조합니다.', result:'처리 상태와 근거자료, 후속 업무가 이력으로 연결됩니다.' }
}

export function PortalDetailPanel({ portalTitle, portalKey, sectionTitle, sectionSlug, childTitle, children }: PortalDetailProps) {
  const guide = portalModuleGuides[portalKey + ':' + sectionSlug] ?? portalModuleGuides['creator:dashboard']
  const focus = childTitle ?? sectionTitle
  const intent = taskIntent(focus)
  const isChild = Boolean(childTitle)
  const pageFields = isChild
    ? [focus + ' 식별정보', '대상·기간·적용 범위', '원천 자료 및 증빙', '현재 상태·담당자', '변경·처리 이력']
    : guide.records
  return <div className="portal-detail-workbench">
    <section className="portal-workbench-intro"><div><small>{portalKey.toUpperCase()} / {sectionSlug.toUpperCase()} / {isChild ? 'TASK DETAIL' : 'MODULE OVERVIEW'}</small><h3>{focus}</h3><p>{isChild ? guide.purpose + ' 선택한 세부 업무에서는 ' + intent.action : guide.purpose}</p></div><span className="portal-access-tag"><LockKeyhole size={13}/> 권한 확인 필요</span></section>
    <div className="portal-workbench-stats">
      <article><small>업무 영역</small><b>{sectionTitle}</b><span>{isChild ? '선택한 세부 업무' : '업무 모듈'}</span></article>
      <article><small>처리 방식</small><b>{intent.verb}</b><span>근거자료·이력 기반</span></article>
      <article><small>데이터 상태</small><b>연동 대기</b><span>실제 운영 데이터 미연결</span></article>
    </div>
    <div className="portal-workbench-grid">
      <section className="portal-workbench-card"><div className="portal-workbench-card-title"><ClipboardList size={17}/><h4>{isChild ? '세부 업무 처리 절차' : '업무 처리 절차'}</h4></div>{(isChild ? [intent.action, ...guide.steps.slice(1)] : guide.steps).map((step, i) => <div className="portal-work-step" key={step}><span>{String(i + 1).padStart(2, '0')}</span><p>{step}</p></div>)}</section>
      <section className="portal-workbench-card"><div className="portal-workbench-card-title"><ShieldCheck size={17}/><h4>접근·처리 기준</h4></div><ul>{guide.access.map(item => <li key={item}>{item}</li>)}</ul></section>
    </div>
    <section className="portal-workbench-menu"><div className="portal-workbench-card-title"><FileCheck2 size={17}/><h4>{isChild ? focus + ' 확인 항목' : '관리·확인 데이터'}</h4></div><div className="portal-workbench-menu-grid">{pageFields.map((name, i) => <div className="portal-workbench-menu-item" key={name}><span>{String(i + 1).padStart(2, '0')}</span><b>{name}</b></div>)}</div></section>
    <section className="portal-page-result"><div className="portal-workbench-card-title"><CheckCircle2 size={17}/><h4>처리 결과 및 산출물</h4></div><div className="portal-page-result-grid">{(isChild ? [intent.result, ...guide.outputs.slice(0, 2)] : guide.outputs).map((item,i)=><article key={item}><small>OUTPUT {String(i+1).padStart(2,'0')}</small><p>{item}</p></article>)}</div></section>
    <section className="portal-workbench-menu"><div className="portal-workbench-card-title"><FileCheck2 size={17}/><h4>{sectionTitle} 전체 세부 메뉴</h4></div><div className="portal-workbench-menu-grid">{children.map((name, i) => <div className={name === childTitle ? 'portal-workbench-menu-item active' : 'portal-workbench-menu-item'} key={name}><span>{String(i + 1).padStart(2, '0')}</span><b>{name}</b>{name === childTitle && <small>현재 선택</small>}</div>)}</div></section>
    <div className="portal-workbench-footnote"><LockKeyhole size={16}/><p><b>{portalTitle} 전용 화면</b> · 화면 구조와 처리 기준은 구체화했으며, 실제 데이터 조회·등록·승인·지급은 인증, 권한 정책 및 백엔드 API 연결 후 활성화됩니다. 화면에 실재하지 않는 회원·권리·금액·심사 데이터를 임의로 만들지 않습니다.</p></div>
  </div>
}
