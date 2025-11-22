import axios from "axios";

export async function gerarRecomendacao(perfil: { interesses: string[] }) {
  const prompt = `
  Usuário com interesses: ${perfil.interesses.join(', ')}.
  Gere 5 trilhas curtas de aprendizado profissional para 2030+.
  `;

  const response = await axios.post("https://api.openai.com/v1/chat/completions", {
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  }, {
    headers: {
      Authorization: 

    }
  });

  return response.data.choices[0].message.content;
}

// Alias para manter compatibilidade
export const gerarRecomendacaoAPI = gerarRecomendacao;
