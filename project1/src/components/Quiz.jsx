export default function Quiz() {

const questions = [
  {
    question: "在炎熱的天氣中，徒步時應該穿什麼？",
    options: ["厚重的羊毛襪", "輕便、排汗的衣物", "厚外套", "涼鞋"],
    answer: 1
  },
  {
    question: "為什麼徒步時攜帶足夠的水很重要？",
    options: ["為了讓身體降溫", "防止脫水", "用來洗手", "以增加負重"],
    answer: 1
  },
  {
    question: "如果在徒步中迷路，最重要的事情是什麼？",
    options: ["一直走，希望能找到路", "保持冷靜，找到安全的地方並發出信號", "立刻生火", "嘗試爬上最高的樹"],
    answer: 1
  },
  {
    question: "當在小徑上遇到熊時，應該怎麼做？",
    options: ["跑得越快越好", "讓自己看起來更大，並慢慢後退", "假裝死亡", "大聲喊叫以嚇跑牠"],
    answer: 1
  },
  {
    question: "最適合開始徒步的時間是什麼時候？",
    options: ["下午", "晚上", "清晨", "中午"],
    answer: 2
  },
  {
    question: "為什麼徒步時要保持在小徑上？",
    options: ["以免迷路", "尊重環境，避免破壞植物和野生動物", "保持安全，避免遇到危險的動物", "以上皆是"],
    answer: 3
  },
  {
    question: "如果在小徑上發現垃圾，應該怎麼做？",
    options: ["把它放著，這不是你的問題", "撿起來並帶走", "留給下個人處理", "打電話給當局處理"],
    answer: 1
  },
  {
    question: "如何避免徒步時起水泡？",
    options: ["穿沒有襪子的涼鞋", "穿太緊的鞋子以防滑動", "穿合適的鞋子和襪子，並避免摩擦點", "忽略任何不適，過一會兒就會好了"],
    answer: 2
  },
  {
    question: "在徒步過程中，如何安全地過溪流或小河？",
    options: ["快速跳過", "毫不關心水深地直接走過去", "找尋橋樑或淺水處過河", "如果水淺，直接游過去"],
    answer: 2
  },
  {
    question: "為什麼徒步時攜帶地圖或 GPS 裝置很重要？",
    options: ["為了展示科技設備", "了解自己所在的位置，避免迷路", "因為使用它很有趣", "拍攝風景用"],
    answer: 1
  }
];


  // Split the questions into 3 parts
  const chunkSize = 4;
  const chunks = [];
  for (let i = 0; i < questions.length; i += chunkSize) {
    chunks.push(questions.slice(i, i + chunkSize));
  }
  return (
    <>
     <ul id='quiz'>
        {chunks.map((chunk, index) => (
          <li key={index} className="quiz-box">
            {chunk.map((question, questionIndex) => (
              <div key={questionIndex} className="question">
                <strong>問題 {index * chunkSize + questionIndex + 1}: <br /></strong> {question.question}
                <ul style={{
                  display:'flex',
                  
                }}>
                  {question.options.map((option, i) => (
                    <li key={i} style={{
                      display:'flex'
                    }}>{i + 1}. {option}</li>
                  ))}
                </ul>
              </div>
            ))}
          </li>
        ))}
      </ul>


    </>
  )
}

