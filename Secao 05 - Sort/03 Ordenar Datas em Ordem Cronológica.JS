// 03 Ordenar Datas em Ordem Cronológica

const date = [{date: "2025-05-16"}, {date: "2025-05-20"}, {date: "2025-05-13"}, {date: "2025-01-30"}, {date: "2024-01-28"}]

date.sort((a, b) => new Date(a.date) - new Date(b.date))
console.log(date)