// 사용자에게 이름, 키, 몸무게의 값을 받아서 사용자가 적정체중인지를 판단한 후 적정체중이라면 "oo님 적정체중입니다!", 적정체중이 아니라면 "oo님 적정체중이 아닙니다!" 메시지를 전달하고 싶습니다.
// 적정체중 어떻게 계산할 수 있는가?
// 적정체중 = (본인 키 - 100) * 0.9
// +/- 5kg까지는 적정체중 => 초과 || 미달

const userName = window.prompt("😉 당신의 이름을 알려주세요!");
const userHeight = window.prompt("🤗 당신의 키를 알려주세요!");
const userWeight = window.prompt("🤐 당신의 몸무게를 알려주세요!");

const normalWeight = (userHeight - 100) * 0.9;
let result = userWeight >= normalWeight - 5 && userWeight <= normalWeight + 5;
result = result ? `적정체중입니다!😁` : `적정체중이 아닙니다!😪`;

console.log(`${userName}님 ${result}`);
