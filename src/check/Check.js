import React, {useState} from "react";
import "./Check.scss";
import {useLocation} from "react-router-dom";
// import Table from 'react-bootstrap/Table';
import agreeTable from "./agreeTable.png"

const Check = () => {

  let platform;
  const location = useLocation();
  if(location.pathname.includes("user")){
    platform = "user";
  }
  else if (location.pathname.includes("data")){
    platform = "data";
  }
  else if (location.pathname.includes("agree")) {
    platform = "agree"
  }
  

  const Content =  (platform) => {

  // const [title, setTitle] = useState('')
  // const [content, setContent] =useState('')
  
  let title
  let content

  // const agreeTable = () => {

  //   return(
  //     <div className="table-responsive" style={{ width: '100%' }}>
  //         <Table striped bordered hover>
  //           <thead>
  //             <tr>
  //               <th><input type="checkbox" /></th>
  //               <th>이름</th>
  //               <th>환자번호</th>
  //               <th>나이</th>
  //               <th>성별</th>
  //               <th>생년월일</th>
  //               <th>연락처</th>
  //               {/* <th>보호자 연락처</th>
  //               <th>주소</th> */}
  //               <th data-tip data-for ='confirm'>가입여부</th>
  //               <th></th>
  //             </tr>
  //           </thead>
  //           {/* <tbody className="body">
  //             {user?.map(c => (
  //               <tr key={c.id}>
                  
  //                 <td><input type="checkbox" /></td>
  //                 <td>{c.name}</td>
  //                 <td className={c.patientNumber === null ? 'patientNumber' : null}>
  //                   {c.patientNumber === null 
  //                   ? '!!환자번호를 등록해주세요'
  //                   : c.patientNumber}</td>
  //                 <td>
  //                   {(c?.born?.substring(0,1) === '0' || c?.born?.substring(0,1) === '1' || c?.born?.substring(0,1) === '2') 
  //                 ? ((year-2000) - c?.born?.substring(0,2)+1) 
  //                 : ((100+(year-2000)) - c?.born?.substring(0,2)+1) }</td>
  //                 <td>{ c?.born?.substring(7) === "1" || c?.born?.substring(7) === "3" 
  //                 ? '남':'여'}</td>
  //                 <td>{c?.born?.substring(0,6)}</td>

                  
  //               </tr>
  //             ))}
  //           </tbody> */}
  //         </Table>
  //       </div>
  //   )
  // }

  if(platform === "user"){
    title = '이용약관'
    content = `엠닥홈케어 환자회원 이용약관
    시행일자 : 2022년 1월 24일
    공고일자 : 2022년 1월 24일
    
    제 1 조 (목적)
    이 약관은 주식회사 엠닥(이하 “회사”라 합니다)이 제공하는 엠닥홈케어 서비스(이하 “서비스”라 합니다)의 이용과 관련하여 환자회원(이하 “회원”이라고만 합니다)과 회사의 관계와 권리의무 등을 규정함을 목적으로 합니다.
    
    제 2 조 (정의)
    ①	본 약관에서 사용하는 정의는 다음과 같습니다.
    1.	“모바일”이라 함은 회사가 의료진에게 서비스를 제공하기 위하여 사용하는 페이지를 의미합니다.
    2.	“의료진”이라 함은 회사와 계약을 체결한 의료기관 등에 소속된 의사 등으로서 회사의 서비스에 가입한 의료진회원을 의미합니다.
    3.	“mDocHomecare 챗봇”이라 함은 회원의 사전문진에 필요한 점검항목을 자동화한 알고리즘을 의미합니다. 
    4.	“mDocHomecare 메신저”라 함은 회원이 담당 의료진과 직접 소통할 수 있는 채팅 채널을 의미합니다. 
    ②	이 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을 제외하고는 관련법령에서 정하는 바에 의하며, 관련 법령에서 정하지 않는 것은 일반적인 상관례에 의합니다.
    
    제 3 조 (이용약관의 효력 및 개정)
    ①	이 약관은 모바일을 통해 게시하는 방법으로 공시되며 회원의 동의로 효력이 발생합니다. 
    ②	회사는 필요하다고 인정되는 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다. 
    ③	회사는 약관이 변경되는 경우에는 적용일자 및 변경사유를 명시하여 현행약관과 함께 모바일 공지사항 또는 팝업에 그 적용일자로부터 최소한 7일 이전부터 적용일 후 상당한 기간 동안 게시합니다. 다만, 회원의 권리, 의무에 중대한 영향을 주는 변경의 경우에는 적용일자 30일 전부터 문자 또는 앱 내 메시지를 통하여 회원이 인지할 수 있는 방법으로 개별 통지하도록 합니다.
    ④	회원은 개정되는 약관의 전체 또는 일부 내용에 동의하지 않을 수 있습니다. 회원이 본 약관의 변경에 대하여 동의하지 않는 경우 회원탈퇴를 통해 이용계약을 해지할 수 있습니다.
    ⑤	회사가 약관 변경의 공지를 통해 개정된 약관의 적용일자로부터 7일(회원에게 불리하거나 중대한 사항의 변경인 경우에는 30일) 내에 이용자가 동의하지 않는다는 의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 고지하였음에도, 회원이 동의하지 않는다는 의사를 표시하지 않는 경우 약관의 변경에 동의한 것으로 간주합니다. 변경 약관에 대하여 거부의사를 표시한 회원은 계약의 해지 또는 회원 탈퇴를 선택할 수 있습니다.
    
    제 4 조 (약관 외 준칙)
    ①	회사는 필요한 경우 서비스 별 개별약관을 정할 수 있으며, 본 약관과 개별약관의 내용이 상충되는 경우에는 개별약관의 내용이 우선 적용됩니다. 
    ②	약관에서 정하지 않은 사항과 이 약관의 해석에 관하여는 기타 관련 법령 및 상관례에 따릅니다.
    
    제 5 조 (이용계약의 성립)
    ①	회사의 서비스를 이용하고자 하는 경우 본 약관을 읽고 내용에 동의하신 후 이용 신청(회원가입 신청)을 하시면 이에 대하여 담당 의료진이 각 회원의 환자번호를 입력함으로써 회원가입 절차가 완료됩니다.
    ②	회사는 제1항의 회원가입 절차 완료 사실을 앱 푸쉬 등의 방법으로 회원에게 통지합니다. 
    
    제 6 조 (만 14세 미만 자의 이용신청)
    회사는 만 14세 미만 자의 이용신청을 제한하고 있습니다. 이용신청 단계에서 만 14세 이상에 해당한다는 안내에 동의표시를 함으로써 회원은 만 14세 이상임을 진술하고 보증합니다.
    
    제 7 조 (이용 신청의 승낙과 제한)
    ①	회사는 제5조의 규정에 의한 이용신청에 대하여 접수 순서에 따라 서비스 이용을 승낙하되, 다음 각 호에 해당하는 경우에 대해서는 이용 신청을 승낙하지 아니할 수 있습니다.
    1. 타인의 정보 또는 허위의 정보를 이용하여 가입을 신청한 경우
    2. 회사가 정한 신청 요건이 충족되지 않은 경우
    3. 중복 아이디를 사용하는 경우
    4. 이용제한 조치를 받은 이력이 있는 경우. 단, 회사의 재가입 승낙을 얻은 경우는 제외.
    5. 만 14세 미만 아동인 경우
    6. 회사의 이용약관 또는 관련법령 등을 위반하거나 미풍양속을 해칠 목적으로 서비스를 이용하려는 경우
    ②	회사는 아래 사항에 해당하는 경우에는 그 신청에 대하여 승낙 제한 사유가 해소될 때까지 승낙을 유보할 수 있습니다. 다만, 이러한 경우에는 그 사유를 고지하여야 합니다.
    1. 회사가 설비의 여유가 없는 경우
    2. 회사의 기술상 서비스를 제공할 수 없는 경우
    3. 기타 회사가 합리적인 판단에 의하여 필요하다고 인정하는 경우
    
    제 8 조 (회원 정보의 변경)
    ①	회원은 모바일 회원정보 관리 페이지에서 언제든지 회원 정보를 열람하고 수정할 수 있습니다.
    ②	회원은 이용 신청 시 기재한 정보가 변경된 경우 지체없이 해당 정보를 수정해야 하며, 회사는 회사의 고의 또는 중대한 과실이 없는 한 회원이 이를 수정하지 않아 발생한 불이익에 대한 책임을 지지 않습니다.
    
    제 9 조 (회원에 대한 통지)
    회사는 서비스와 관련하여 회원에게 개별적 통지가 필요한 경우 문자 또는 모바일 푸시 등(이하 ‘문자 등’)으로 통지할 수 있습니다.
    
    제 10 조 (회사의 의무)
    ①	회사는 본 약관 및 관련법령에서 금지하는 행위 및 미풍양속에 반하는 행위를 하지 않으며, 본 약관에서 정하는 바에 따라 지속적이고 안정적인 서비스의 제공을 위하여 최선을 다하여 노력합니다.
    ②	회사는 회원으로부터 제기되는 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는 합리적인 기간 내에 신속하게 처리하여야 합니다. 다만, 처리에 장기간이 소요되는 경우 회원에게 게시판 또는 이메일 등을 통하여 지체 사유를 안내하고 처리과정 및 처리결과를 전달합니다.
    ③	회사는 천재지변 등 불가항력이나 시스템 장애로 인하여 서비스가 중단될 경우 빠른 시일 내에 정상적인 서비스를 제공할 수 있도록 노력합니다.
    ④	회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보(신용정보 포함)를 포함한 일체의 개인정보 보호를 위한 보안시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다. 
    ⑤	회사는 회원이 사전에 명시적으로 동의하지 않은 영리목적의 광고성 이메일, 알림 등을 발송하지 않습니다.
    
    제 11 조 (회원의 의무)
    ①	회원은 회원가입 신청 또는 회원정보 변경 시 회사에 제공되는 모든 사항을 사실대로 작성하여야 하며, 허위 또는 타인의 정보를 등록할 경우 회원의 권리를 주장할 수 없습니다.
    ②	회원 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안 됩니다.
    1.	회원가입 신청 또는 정보 변경 시 허위 정보를 입력하거나 정보를 누락하는 행위
    2.	회사의 업무를 방해하는 행위
    3.	회사 또는 타인의 명예를 훼손하거나 모욕하는 행위
    4.	회사 또는 타인의 지식재산권을 침해하는 행위
    5.	타인으로 가장하거나 타인과의 관계를 허위로 명시하는 행위, 다른 회원의 계정 및 비밀번호를 도용, 부정하게 사용하는 행위
    6.	서비스를 회사의 동의 없이 상업적 목적으로 이용하는 행위
    7.	회사의 직원이나 운영자를 가장, 사칭하거나 또는 타인의 명의를 도용하여 문서를 등록하거나 메일을 발송하는 행위
    8.	회사의 동의 없이 광고, 홍보, 청약에 관한 자료 또는 스팸, 피싱 등의 메시지를 전송하는 행위
    9.	회사가 제공하는 서비스 이용방법에 의하지 아니하고 비정상적인 방법으로 서비스를 이용하거나 회사의 정보처리시스템에 접근하는 행위
    10.	매크로 프로그램 등을 사용하여 서비스를 부정한 방법으로 이용하는 행위
    11.	바이러스, 스파이웨어, 애드웨어 등 회사나 다른 회원의 소프트웨어를 손상시킬 수 있는 컴퓨터 코드, 파일, 소프트웨어 등을 전송, 게시하는 행위
    12.	기타 회사의 약관을 위반하는 행위
    13.	기타 관련 법령을 위반하거나 미풍양속을 해하는 행위
    ③	회원은 개인정보가 타인에게 노출되지 않도록 철저하게 관리하여야 하며, 타인이 회원의 계정을 사용하고 있음을 인지한 경우에는 즉시 회사에 통보하고 적절한 조치를 취해야 하며 회사의 안내가 있는 경우에는 그에 따라야 합니다.
    ④	회사는 본 조를 위반하여 회원에게 발생한 불이익에 대하여 회사의 고의 또는 중대한 과실이 없는 한 어떠한 책임도 지지 않습니다.
    
    제 12 조 (서비스의 내용)
    ①	회사는 회원의 이용신청을 승낙한 시점부터 회원에게 서비스를 제공합니다. 단, 서비스 중 일부는 본인인증을 거친 회원에게만 제공할 수 있습니다.
    ②	서비스는 담당 의료진이 응답하는 방식으로 운영됩니다. 일부 서비스의 경우 의료진의 일정에 따라 서비스 이용 시간에 제한이 있을 수 있습니다.
    ③	회사는 필요한 경우 서비스 내용을 추가 또는 변경할 수 있습니다. 회사는 서비스 내용에 변경이 있을 경우 모바일 공지사항 등을 통해 공지하고, 약관의 개정이 필요할 경우 약관 개정의 절차를 따릅니다. 만일 서비스 내용의 변경으로 인하여 회원의 권리·의무에 불리하거나 중요한 영향을 미치는 경우에는 해당 내용을 그 적용일로부터 30일 전에 공지사항에 공지하고, 회원의 이메일로 개별 통지합니다.
    ④	회사는 서비스가 변경으로 인하여 발생한 문제가 회사의 고의 또는 중대한 과실로 인한 경우를 제외하고는 서비스의 변경으로 발생하는 문제에 대해서 책임을 부담하지 않습니다.
    
    제 13 조 (사전문진 서비스)
    ①	회원은 “mDocHomecare 챗봇”을 통해 사전문진 서비스를 이용할 수 있습니다. 회원은 점검항목에 대하여 “mDocHomecare 챗봇”이 제공하는 선택지 중 자신의 현재 건강상태에 해당하는 답안을 선택합니다.
    ②	사전문진 서비스를 통해 생성된 결과는 회사가 수집하며, 오직 회사와 각 회원 담당 의료진이 속한 병원의 의료진들만 이에 접근하여 열람 및 관리할 수 있습니다.  
    
    제 14 조 (mDocHomecare 메신저 서비스)
    ①	회원은 전 조의 사전문진 서비스를 통해 생성된 결과를 토대로 “mDocHomecare 메신저”를 통해 정기적 또는 비정기적으로 담당 의료진과 직접 소통하는 서비스를 이용할 수 있습니다. 
    ②	회원은 “mDocHomecare 메신저” 서비스를 통해 정기적 또는 비정기적으로 담당 의료진과 상담을 진행할 수 있습니다.
    ③	정기상담 서비스를 통하여 생성된 회원과 담당 의료진 간의 상담 내용은 회사가 수집하며, 회사와 각 회원 담당 의료진이 속한 병원의 의료진들은 위 상담 내용에 접근하여 열람 및 관리할 수 있습니다.
    ④	회원은 담당 의료진의 일정에 의해 정기상담 및 비정기적으로 이루어지는 비정기 상담 이용 시간이 제한될 수 있습니다. 
    ⑤	회원이 관련 법에 의하여 의료행위로 판단될 우려가 있는 상담을 요청하는 경우, 담당 의료진은 해당 내용에 대한 상담을 거부할 수 있습니다.
    ⑥	회원은 “mDocHomecare 메신저”를 통하여 명예훼손, 모욕, 성적 자기결정권 침해, 기타 사회통념상 건전하지 못한 요청을 하거나 그러한 내용을 전송하여서는 안 됩니다. 이러한 행위로 인하여 타인으로부터 신고된 경우 이 약관 제18조(서비스 이용 제한)에 따라 회원의 서비스 이용이 제한될 수 있습니다.
    
    제 15 조 (상담 관리 서비스)
    ①	회원은 약 2주 간격으로 진행되는 정기 상담 일정을 예약, 변경, 취소할 수 있는 상담 관리 서비스를 이용할 수 있습니다.
    ②	예약된 상담 일정에 대하여 회원에게 사전 알람이 발송될 수 있습니다. 
    ③	회원은 상담 관리 서비스를 통해 본인과 담당 의료진 간의 과거 정기 및 비정기 상담 내용을 열람할 수 있습니다.
    
    제 16 조 (서비스의 이용 중지)
    ①	회사는 특별한 사유가 없는 한 연중무휴, 1일 24시간 서비스를 제공합니다. 다만, 서비스의 종류나 성질에 따라 서비스 중 일부에 대해서는 별도의 이용제한이 있을 수 있습니다.
    ②	회사는 자료의 가공과 갱신을 위한 시스템 작업시간, 장애 해결을 위한 보수작업 시간, 정기 PM 작업, 시스템 교체 작업, 회선 장애 등이 발생한 경우 일시적으로 서비스를 중지할 수 있으며 사전에 회원에게 서비스 중지 시간과 작업 내용을 알려야 합니다. 다만 회사가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다. 
    ③	회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부의 제공을 일시적으로 중지할 수 있습니다.
    1.	설비의 보수 등 회사의 필요에 의해 사전에 회원에게 통지한 경우
    2.	기간통신사업자가 전기통신서비스 제공을 중지하는 경우
    3.	회원 또는 제3자의 악성 프로그램 유포, 불법 소프트웨어 사용 등의 불법행위로 서비스 제공에 장애가 발생하는 경우
    4.	천재지변, 국가비상사태, 폭동, 대규모 정전, 기타 불가항력에 의한 경우
    5.	기타 회사의 귀책사유 없이 서비스 제공이 객관적으로 불가능한 경우
    ④	회사는 서비스가 중단된 원인이 회사의 고의 또는 중대한 과실로 인한 경우를 제외하고는 서비스의 중단으로 발생하는 문제에 대해서 책임을 부담하지 않습니다.
    ⑤	사업 종목의 전환, 사업의 종료 또는 포기, 회사의 폐업, 합병, 분할, 영업양도 등의 이유로 서비스를 제공할 수 없게 되는 경우 회사는 회원에게 미리 통지합니다.
    
    제 17 조 (서비스 이용 제한)
    ①	회사는 다음 각 호에 해당하는 경우 회원의 동의 없이 서비스 이용을 제한할 수 있습니다. 
    1.	회원 정보를 허위로 기재한 경우 
    2.	이 약관 및 관련된 별도의 서비스 준수 사항을 위반한 경우 
    3.	타인의 명예를 훼손하거나 모욕한 경우
    4.	회사의 영업을 방해하거나 회사가 제공하는 서비스와 동일한 업무를 행하는 경우 
    5.	회사 또는 다른 회원의 보안을 위협하는 행위를 한 경우
    6.	회원의 개인정보를 본 서비스 외의 목적으로 이용한 경우
    7.	회원이 명예훼손, 모욕, 성적 자기결정권 침해, 기타 사회통념상 건전하지 못한 내용의 요청을 하거나 메신저를 발송하는 경우
    8.	관련법령을 위반하여 본 서비스를 이용한 경우
    ②	회사의 이용제한 조치로 강제 탈퇴 되는 경우 회원의 계정에 보유 중인 상담 내역은 삭제되고 예약된 모든 상담 일정은 자동으로 취소됩니다.
    
    제 18 조 (이용 계약의 해지·해제 등)
    ①	회원은 회사가 정한 절차에 따라 탈퇴 신청을 함으로써 이용계약을 해지할 수 있습니다.
    ②	회원이 계약을 해지하는 경우 관련 법령 및 개인정보처리방침에 따라 회사가 회원정보를 보존하는 경우를 제외하고 회사는 지체없이 회원의 개인정보를 파기합니다.
    ③	회원의 요청에 따라 삭제된 정보는 복구할 수 없습니다.
    ④	다음 각 호의 사유에 해당하는 경우 회사는 회원의 동의 없이 이용계약을 해지하거나 서비스 이용을 중지할 수 있습니다.
    1.	회원이 등록한 정보의 내용이 사실과 다르거나 조작되었을 경우
    2.	부정한 목적으로 유료 서비스를 반복적으로 결제/취소할 경우
    3.	본 약관을 중대하게 위반하는 경우
    4.	타인의 지식재산권을 침해하는 경우
    5.	본 서비스를 상업적 목적으로 이용하는 경우
    6.	기타 관계 법령을 위반하거나 부정한 목적으로 본 서비스를 이용하는 경우
    
    제 19 조 (개인정보의 보호 및 사용)
    ①	회사는 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 이용에 관해서는 관련 법령 및 회사의 개인정보처리방침을 따릅니다. 
    ②	회사는 회원의 개인정보를 본인의 동의 없이 제3자에게 제공, 분실 또는 유출하여서는 아니됩니다. 단, 회원의 동의를 얻은 경우, 기타 법률에 특별한 규정이 있는 경우에는 예외로 합니다. 
    ③	회원은 본 서비스 이용 과정에서 얻게 되는 타인의 개인정보를 상업적 목적 또는 개인적 목적으로 사용하여서는 아니 됩니다. 
    
    제 20 조 (손해배상)
    ①	회사는 고의 또는 중과실로 본 약관 또는 관련법령을 위반하여 회원에게 손해를 입힌 경우 그 손해를 배상합니다. 
    ②	회원은 고의 또는 과실로 본 약관 또는 관련법령을 위반하여 회사 또는 제3자에게 손해를 입힌 경우 그 손해를 배상하여야 하며, 이로 인하여 회사와 제3자 간에 분쟁이 발생한 경우 자신의 책임과 비용으로 회사를 면책하여야 합니다.
    
    제 21 조 (면책)
    ①	회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대하여 책임 지지 않습니다. 
    ②	회사는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다. 
    ③	회사는 회사가 네트워크를 통한 외부의 불법행위를 차단하고자 관련 법령에 따라 요구되는 보호조치를 이행하였음에도 불구하고, 분산서비스거부(DDos) 등 네트워크의 안정성을 해치는 행위 또는 악성프로그램 등에 의하여 발생하는 예기치 못한 회원의 손해에 대하여 책임지지 않습니다.
    ④	회사는 회원의 귀책사유로 인하여 발생한 손해에 대하여는 회사의 고의 또는 중대한 과실이 없는 한 책임지지 않습니다.
    ⑤	회사가 제공하는 정보와 자료는 개인적 목적 또는 거래의 목적으로 이용될 수 없습니다. 따라서 회원이 본 서비스를 통하여 얻는 정보를 이용하여 본 서비스의 목적을 벗어나 사용함으로써 발생하는 손해 또는 기대이익의 상실에 대하여 회사는 고의 또는 중대한 과실이 없는 한 책임지지 않습니다.
    ⑥	mDocHomecare 메신저 서비스와 관련하여, 회사는 고의 또는 중과실이 없는 한 각 회원 담당 의료진의 상담 내용으로 인한 손해에 대하여 책임지지 않으며, 기타 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여 책임을 지지 않습니다.
    ⑦	의료진의 상담 내용이 「의료법」, 「의료기사 등에 관한 법률」 및 관련 법령에 의하여 회사의 서비스를 통해 제공될 수 있는 범위를 초과하는 경우에 대하여 회사는 책임지지 않습니다.
    
    제 22 조 (권리의 양도금지)
    회원은 회사의 서면 동의 없이 이 약관상의 권리와 의무를 제3자에게 양도, 증여하거나 이를 담보로 제공할 수 없습니다.
    
    제 23 조 (약관의 해석)
    본 약관의 해석에 관하여 다툼이 있는 경우 대한민국 법률이 적용되고 이에 따라 해석됩니다. 
    
    제 24 조 (분쟁의 해결) 
    회원과 회사 사이에 발생한 분쟁에 대해 소송이 제기되는 경우 대한민국에 소재한 서울중앙지방법원을 전속관할로 합니다.`

  }
    
  else if (platform === "data") {
    title = '개인정보처리방침'
    content = `엠닥 개인정보 처리방침
    주식회사 엠닥(이하 “회사”)는 회원들의 개인정보보호를 매우 중요시하며, 회원이 회사의 서비스 엠닥홈케어(이하 “서비스”)를 이용함과 동시에 온라인상에서 회사에 제공한 개인정보가 보호받을 수 있도록 최선을 다하고 있고, 개인정보와 관련된 법령 상의 개인정보보호 규정을 준수하고 있습니다.
    회사는 아래와 같이 개인정보처리방침을 명시하여 회원이 회사에 제공한 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치를 취하는지 알려드립니다. 회사의 개인정보처리방침은 법령 및 고시 등의 변경 또는 회사의 약관 및 내부 정책에 따라 변경될 수 있으며 이를 개정하는 경우 회사는 변경사항에 대하여 서비스 화면에 게시하거나 회원에게 고지합니다.
    
    제1조 처리하는 개인정보 항목
    ① 환자(필수 항목)
    처리 목적	처리 항목
    서비스 회원가입 및 관리	이름, 환자번호, 휴대폰번호, 비밀번호, 생년월일, 성별
    서비스 제공	사전 문진 데이터(본인 여부, 체중, 평균 제수량(cc), 투석액 주입상태, 투석액 배액 상태, 도관 부위 이상, 환자 상태, 초기배액량, 총 제수량, 평균 저류시간, 투석방식, 투석액 농도), 상담정보(정기상담 내용, 비정기상담 내용), 의료진 예약 시간
    고객센터, 민원 등 관리	고객센터 이용 시 고객센터 문의 내용
    불량 회원의 부정 이용 방지	서비스 이용기록, 방문기록, IP 주소, 불량 이용 기록
    ② 의료진(필수 항목)
    처리 목적	처리 항목
    서비스 회원가입 및 관리	이메일주소, 비밀번호
    서비스 제공	환자의 의료진 예약 일정
    고객센터, 민원 등 관리	고객센터 이용 시 고객센터 문의 내용
    불량 회원의 부정 이용 방지	서비스 이용기록, 방문기록, IP 주소, 불량 이용 기록
    ③ 기타(공통)
    -	(선택) 참여하는 서비스에 대한 연구목적 또는 만족도 조사 목적의 설문조사 관련 정보 
    -	(선택) 마케팅·이벤트 정보 등 이벤트 참여 과정에서 수집하는 추가 개인정보 (이벤트 진행 및 경품 배송을 위한 주소지(추가수집), 핸드폰, 이름)
    ④ 회사는 다음과 같은 방법으로 개인정보를 수집합니다.
    -	홈페이지, 모바일 어플리케이션, 모바일 웹페이지 등을 통하여 회원가입·서비스 이용시 환자 및 의료진이 입력한 정보
    -	고객센터 문의, 상담 등을 위하여 고객이 입력한 정보
    -	자동 수집 저장장치를 통한 생성정보의 수집
    ⑤ 회사는 서비스 내에서의 설문조사나 이벤트 행사 시 통계분석이나 경품제공 등을 위해 회원에게 선택적으로 개인정보 입력을 요청할 수 있습니다. 회원은 회사가 발송하는 뉴스레터 내의 광고 메일 수신과 함께 이벤트, 경품 등의 혜택을 받는 광고 메일 수신자가 되는 경우에도 선택적으로 개인정보 입력을 요청받을 수 있습니다. 다만 회사는 회원이 광고 메일 수신에 관하여 명시적으로 사전 동의하지 않는 이상 광고 메일을 발송하지 않습니다.
    
    제2조 개인정보의 처리목적
    ① 회사는 기본적인 서비스 제공을 위한 필수 정보만을 수집하고 있으며 서비스에 맞는 별도의 개인 정보를 제공받기 위해서는 정보 수집 시 별도 동의를 얻고 있습니다. 회사는 회원이 최소한의 개인정보 이외의 개인정보를 제공하지 아니한다는 이유로 그 서비스의 제공을 거부하지 않습니다.
    ② 회사는 다음과 같은 목적으로 회원의 개인정보를 수집합니다. 회사는 처리한 개인정보를 다음의 목적 이외의 용도로 사용하지 않으며 회원의 동의 없이 제3자에게 이를 제공하지 않습니다.
    1.	회원 가입 및 관리, 서비스 제공
    회원제 서비스 이용에 따른 본인확인, 회원식별을 위한 목적, 원활한 의사소통 경로 확보, 고객 문의에 대한 응답, 새로운 정보의 소개 및 고지사항 전달, 불량회원의 부정이용방지와 비인가 사용방지, 가입의사 확인, 가입 및 가입횟수 제한, 재가입 관리, 본인확인 및 분쟁조정을 위한 기록보존, 불만 등 민원처리 등
    2.	신규 서비스 개발 및 마케팅·광고에의 활용
    회원을 위한 통계학적 특성 분석에 기반한 새로운 맞춤형 서비스 제공 및 광고 게재, 각종 이벤트 및 광고성 정보 제공, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등
    3.	기타 법령상 필요에 따른 이용
    법령 등에 규정된 의무의 이행, 법령이나 이용약관에 반하여 회원에게 피해를 줄 수 있는 잘못된 이용행위의 방지 등
    
    제3조 개인정보의 처리 및 보유기간
    ① 법령에서 별도로 정하거나 귀하와 별도 합의하는 등의 특별한 사정이 없는 한 회원이 서비스 회원으로서 회사에 제공하는 서비스를 이용하는 동안 또는 제1조에서 정한 목적을 달성할 때까지 회사는 회원들의 개인정보를 계속적으로 보유하며 서비스 제공 등을 위해 이용합니다.
    ② 회원의 개인정보는 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기하는 것을 원칙으로 합니다. 다만, 회사는 서비스 혼선 방지, 수사기관에 대한 협조, 불량 회원의 부정한 이용의 재발 및 재가입을 방지하고 분쟁 해결을 위하여 이용계약 해지일로부터 6개월간 해당 회원의 성명, 연락처(이메일 주소 또는 휴대폰 번호), 부정이용 내역(서비스 이용기록, 쿠키, 접속IP정보)을 보관할 수 있습니다.
    ③ 회사는 아래의 경우 관련 법령에 따라 회원의 탈퇴 또는 파기요청에도 불구하고 일정한 기간 동안 회원의 아래 개인정보를 보관합니다. 다만, 그 경우에도 회사는 보관하는 정보를 보관 목적으로만 이용하며, 구체적인 보관기간은 아래와 같습니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
    보존근거	보존항목	보존기간
    전자상거래 등에서의 소비자보호에 관한 법률	계약 또는 청약철회 등에 관한 기록	5년
      대금결제 및 재화 등의 공급에 관한 기록	5년
      표시, 광고에 관한 기록	6개월
      소비자의 불만 또는 분쟁처리에 관한 기록	3년
    통신비밀보호법	웹사이트방문기록	3개월
    
    제4조 개인정보 제3자 제공
    ① 회사는 회원의 개인정보를 제2조에서 고지한 범위 내에서 사용하며, 위 범위를 초과하여 이용하거나 회원의 사전 동의 없이 타인 또는 타기업 등 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.
    1. 회원으로부터 사전동의를 받은 경우
    회사는 회원의 개인정보를 제3자에게 제공하는 경우 다음의 사항을 회원에게 알리고 동의를 받습니다.
    - 개인정보를 제공받는 자
    - 개인정보를 제공받는 자의 이용 목적
    - 제공하는 개인정보의 항목
    - 개인정보를 제공받는 자의 개인정보 보유 및 이용 기간
    2. 관련 법령의 규정에 의한 경우(수사, 조사 목적으로 관련 법령에서 정한 절차와 방법에 따라 수사기관 및 감독당국이 개인정보 제공을 요구하는 경우를 포함)
    3. 영업의 양수 등
    ② 회원은 개인정보의 제3자 제공에 대하여 동의를 하지 않을 수 있고, 언제든지 제3자 제공 동의를 철회할 수 있습니다. 동의를 거부하시는 경우에도 회원가입서비스는 이용하실 수 있으나, 제3자 제공에 기반한 관련 서비스의 이용/제공이 제한될 수 있습니다. 기타 개인정보 제3자 제공에 대한 변동사항은 별도 통지를 통해 공지됩니다.
    
    제5조 개인정보의 위탁 처리
    ① 회사는 서비스 향상을 위해서 회원의 개인정보를 서비스 제공을 위해서 반드시 필요한 업무 중 일부의 수행을 위하여 다음과 같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다. 또한 공유하는 정보는 당해 목적을 달성하기 위하여 필요한 최소한의 정보에 국한됩니다.
    위탁받는 자	위탁 업무
    Amazon Web Service(한국 서버)	클라우드 서비스
    ② 위탁업무의 내용이나 수탁자가 변경될 경우에는 본 개인정보취급방침을 통하여 공개하도록 하겠습니다.
    
    제6조 회원의 권리 및 행사방법
    ① 회원은 언제든지 자신의 개인정보를 조회하고 수정할 수 있습니다.
    ② 회원은 언제든지 개인정보 제공에 관한 동의철회(삭제)/회원가입해지를 요청할 수 있습니다. 회원이 개인정보 제공 동의를 철회하면 회사는 지체 없이 수집된 개인정보를 복구·재생할 수 없도록 파기합니다. 다만, 동의 철회 또는 삭제 시 관련 서비스의 일부 또는 서비스 전부의 이용이 제한될 수 있습니다.
    ③ 회원이 개인정보에 대한 열람·증명 또는 정정을 요청하는 경우 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다. 회사는 개인정보에 오류가 있거나 보존기간을 경과한 것이 판명되는 등 정정 또는 삭제할 필요가 있다고 인정되는 경우 지체 없이 그에 따른 조치를 취합니다.
    ④ 다만, 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우, 다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우, 개인정보를 처리하지 아니하면 정보 주체와 약정한 서비스를 제공하지 못하는 등 계약의 이행이 곤란한 경우로서 정보주체가 그 계약의 해지 의사를 명확하게 밝히지 아니한 경우에는 동의 철회, 삭제, 처리 정지가 어려울 수 있습니다.
    ⑤ 회원은 본조에 따른 회원의 권리를 개인정보보호법에 따른 적법한 위임장의 제출에 따라 대리인에게 행사하게 할 수 있으며, 만 14세 미만 아동의 경우에는 법정대리인을 통하여 행사할 수 있습니다.
    
    제6조 개인정보 파기절차 및 방법
    ① 회원이 서비스를 통해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(출력물의 경우 별도의 서류함) 내부 방침 및 기타 관계법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다. 이 때 별도의 DB로 옮겨진 개인정보는 회원이 동의한 목적을 초과하거나 혹은 법률이 정한 경우 외의 다른 목적으로 이용되지 않습니다.
    ② 회사는 제5조에서 설명한 절차와 방법에 따라 회원 본인이 직접 정보 수정·삭제를 요청하거나 가입해지를 요청한 경우에도 본 조에서 정한 바와 같이 파기 처리합니다.
    ③ 제1조에서와 같이 일시적인 목적(설문조사, 이벤트, 본인확인 등)으로 입력 받은 개인정보는 그 목적이 달성된 이후에는 동일한 방법으로 파기 처리됩니다.
    ④ 회사는 귀중한 회원의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.
    1. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
    2. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
    ⑤ 회사는 개인정보보호법 제39조의6 제1항 및 개인정보보호법 시행령 제48조의5 제1항 본문에 따라 휴면회원(최근 12개월동안 서비스를 이용하지 아니한 회원)에 대해 회원 자격 상실에 대한 안내문을 이메일 주소를 통하여 통지하고, 안내문에서 정한 기한 내에 답변이 없을 경우 회원자격을 상실시킬 수 있습니다. 이 경우, 휴면회원의 개인정보는 다른 회원의 개인정보와 분리하여 별도로 저장·관리되며, 분리 저장된 개인정보는 보관기간 경과 후 파기하고 있습니다. 
    
    
    제7조 개인정보보호를 위한 기술적, 관리적 조치
    ① 회사는 회원의 개인정보를 처리함에 있어 정보의 분실, 도난, 누출, 외부로부터의 공격, 해킹 등을 방지하고 안전성을 확보하기 위하여 기술적·관리적 및 물리적 조치를 하고 있습니다.
    ② 회사가 수행하는 기술적∙관리적 및 물리적 조치는 다음과 같습니다.
    1. 개인정보의 안전한 처리를 위하여 별도의 내부 관리계획을 수립·시행하고 있습니다.
    2. 개인정보에 대한 접근 통제 및 접근 권한을 제한하기 위하여 회원의 개인정보를 처리하는 담당인원을 최소한으로 제한하며, 관련 직원에 대해서는 지속적인 보안교육의 실시와 함께 본 정책의 준수여부를 수시로 점검하고 있습니다.
    3. 개인정보를 안전하게 저장·전송할 수 있도록 회원의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송 데이터를 암호화하여 중요한 데이터는 별도의 보안기능을 통해 보호하며, 암호화통신(SSL)등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하는 등 노력을 기울이고 있습니다.
    4. 개인정보 침해사고 발생에 대응하기 위한 접속기록의 보관 및 위조·변조 방지를 위하여 개인정보취급자가 개인정보처리시스템에 접속하여 개인정보를 처리한 경우 접속일시, 처리내역 등을 저장하고 위·변조 또는 도난, 분실, 파기되지 않도록 별도로 보관합니다.
    5. 회사는 컴퓨터 바이러스에 의한 개인정보 피해가 발생하지 않도록 백신프로그램을 이용하고 있으며, 주기적으로 업데이트를 진행하는 등 개인정보에 대한 보안프로그램을 설치 및 갱신하고 있습니다.
    6. 개인정보의 안전한 보관을 위하여 외부침입을 차단하는 보안장치를 이용하고 있으며, 침입탐지시스템을 설치하여 불법적인 침입을 감시하는 등 별도의 보관시설의 마련 또는 잠금 장치의 설치 등 물리적 조치를 취하고 있습니다.
    
    제8조 쿠키(cookie)의 운영에 관한 사항
    ① 회사는 회원 서비스를 위하여 Cookie 방식을 이용하고 있습니다. 이는 로그아웃(Logout)시 자동으로 컴퓨터에 저장되지 않고 삭제되도록 되어 있으므로 공공장소나 타인이 사용할 수 있는 컴퓨터를 사용 하 실 경우에는 로그인(Login)후 서비스 이용이 끝나시면 반드시 로그아웃(Logout)해 주시기 바랍니다.
    ② 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
    설정방법 예(안드로이드): 설정 > 애플리케이션 > 서비스 > 저장공간 > 데이터 삭제 혹은 캐시 삭제
    단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.
    
    제9조 개인정보관련 의견수렴 및 불만처리에 관한 사항
    회사는 개인정보보호와 관련하여 회원 여러분들의 의견을 수렴하고 있으며 불만을 처리하기 위하여 모든 절차와 방법을 마련하고 있습니다. 회원들은 하단에 명시한 제10조를 참고하여 전화나 메일을 통하여 불만사항을 신고할 수 있고, 회사는 회원들의 신고사항에 대하여 신속하고도 충분한 답변을 해 드릴 것입니다.
    
    제10조 개인정보 보호책임자
    ① 회사는 회원이 서비스를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. 개인정보를 보호하기 위하여 개인정보 보호책임자를 지정합니다.
    ② 회사는 회원이 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 문의할 수 있도록 개인정보에 대한 의견수렴 및 불만처리를 담당하는 부서를 지정하고 있고, 연락처는 아래와 같습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리합니다.
    부서명: 민원담당부서
    연락처: support@m-doc.io  
     
    제11조 개인정보처리방침의 적용 제외
    회사는 회원에게 서비스 페이지를 통하여 다른 회사의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 이 경우 회사는 외부사이트 및 자료에 대하여 통제권이 없을 뿐만 아니라 이들이 개인정보를 수집하는 행위에 대하여 회사의 '개인정보처리방침'이 적용되지 않습니다. 따라서, 회사가 포함하고 있는 링크를 클릭하여 타 사이트의 페이지로 이동할 경우에는 새로 방문한 사이트의 개인정보처리방침을 반드시 확인하시기 바랍니다.
    
    제12조 권익침해 구제방법
    ① 회원은 다음 각 호의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의할 수 있습니다. 아래의 기관은 회사와 별개의 기관으로서, 회사의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 구체적이고 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.
    ② 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
    1. 개인정보 침해신고센터 (한국인터넷진흥원 운영) 
    소관업무: 개인정보 침해사실 신고 / 상담 신청 
    홈페이지: privacy.kisa.or.kr 
    전화: (국번없이) 118 
    주소: (58324) 전남 나주시 진흥길 9 (빛가람동 301-2) 3층 개인정보침해신고센터
    2. 개인정보 분쟁조정위원회 사무국
    소관업무: 개인정보 분쟁조정신청, 집단분쟁조정
    홈페이지: www.kopico.go.kr 
    전화: 1833-6972 
    주소: 서울시 종로구 세종로 209 정부서울청사 (개인정보보호위원회)
    3. 대검찰청 사이버수사과: 지역번호+1301 (www.spo.go.kr)
    4. 경찰청 사이버안전국: 경찰민원콜센터 182 (www.netan.go.kr)
    
    제13조 고지의 의무
    이 개인정보 처리방침은 시행일로부터 적용됩니다. 고객의 개인정보 권리에 중요한 변경 사유가 발생하는 경우 최소 14일전에 공지사항을 통하여 고지합니다. 이 외의 다른 변경사항이 발생하는 경우에는 변경사항의 시행 최소 7일 전부터 공지사항을 통해 고지합니다.
    - 시행일: 2022-01-24`
  }

  else if (platform === "agree") {
    title = '개인정보수집 및 이용 동의'
    content = `
    수집 목적	수집 항목	보유 및 이용 기간
    회원 가입 및 회원 관리	이름, 환자번호, 휴대폰번호, 비밀번호, 생년월일, 성별 	회원탈퇴 또는 목적 달성시까지,
    법령에 따른 보존기간이 있는 경우 해당 기간 만료시까지
    서비스 제공	사전 문진 데이터(본인 여부, 체중, 평균 제수량(cc), 투석액 주입상태, 투석액 배액 상태, 도관 부위 이상, 환자 상태, 초기배액량, 총 제수량, 평균 저류시간, 투석방식, 투석액 농도), 상담정보(정기상담 내용, 비정기상담 내용), 의료진 예약 시간	
    고객센터, 민원 등 관리	고객센터 이용 시 고객센터 문의 내용	
    불량 회원의 부정 이용 방지	서비스 이용기록, 방문기록, IP 주소, 불량 이용 기록	
    귀하는 회사의 개인정보 수집 및 이용에 대하여 동의를 거부할 권리가 있습니다. 
    다만, 동의 거부 시 회원가입이 불가능할 수 있습니다.
    `
  }
   

    return(
      <div className="page contact">
      <div className="contact-intro">
        <h1>{title}</h1>
        {/* <p>문의 사항을 남겨주시면 최대한 빠르게 회신드리겠습니다</p> */}
      </div>
      <div className="contact-form">
        <div className="form-header">
          {/* <h1>이용약관</h1> */}
          {/* <p>제휴, 제품 사용, 채용 등 궁금하신 점들을 편하게 문의해주세요</p> */}
        </div>
        <div className="form-body">
          <div className="input-item">
            {/* <span>엠닥이용약관</span> */}
            {platform === "agree" ? 
            <img src={agreeTable} alt="" />
            :
            <textarea type="text"
            style={{backgroundColor:'white'}}
                   value=
                   {content}
                   />
            } 
          </div>
        </div>
      </div>
    </div>
    )

  }


 

  return (
    <div>
        {Content(platform)}
    </div>
   
  )
}

export default Check;