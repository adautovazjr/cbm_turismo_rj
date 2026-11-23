# Rio Viva — protótipo de site de turismo (Rio de Janeiro)

Site estático (HTML + CSS + JavaScript puro). Sem back end, sem build, sem dependências.
**Abra `index.html` com duplo clique** ou sirva a pasta com qualquer servidor estático.

## Páginas
| Arquivo | Conteúdo |
|---|---|
| `index.html` | Home: hero, próximas datas, roteiro rápido por perfil |
| `calendario.html` | Calendário mensal interativo (feriados nacionais/estaduais/municipais, datas comemorativas, filtros, exportar .ics) |
| `pontos-turisticos.html` | 12 atrações com filtro, busca e detalhes |
| `gastronomia.html` | Pratos típicos + 12 lugares (filtro por tipo/preço) |
| `praias.html` | 12 praias, filtro por perfil, ordenação e notas |
| `dicas.html` | Dicas essenciais, roteiros de 1/3/5 dias, checklist de mala (salvo no navegador) |
| `mobilidade.html` | Aeroportos GIG/SDU, planejador aeroporto → bairro, modais, linhas de metrô |

## Idiomas (PT-BR / EN / ES)
Seletor com bandeiras SVG no cabeçalho; a escolha fica salva (localStorage). Também funciona via `?lang=en`.
- Textos de interface: `js/i18n.js` (função `d("chave", pt, en, es)`).
- Conteúdo: `js/data/*.js`, cada texto como `{ pt, en, es }`.

## Como editar o conteúdo
- Novo ponto turístico / prato / praia: adicione um objeto no array de `js/data/*-data.js`.
- Fotos (Pontos turísticos e Gastronomia): arquivos em `img/attractions`, `img/dishes` e `img/places`, registrados em `js/data/photos-data.js` (autor, licença, link de origem). Vieram do Wikimedia Commons com licença livre; a página `creditos.html` é gerada a partir desse arquivo. Para trocar uma foto, substitua o JPG e atualize o autor/licença. `illus: true` marca foto ilustrativa (prato/ambiente típico, não o estabelecimento). Item sem foto continua com gradiente + emoji. Praias e Mobilidade ainda não têm fotos.
- Feriados: `js/data/calendar-data.js` (datas móveis são calculadas para qualquer ano).

## Observação
Conteúdo ilustrativo (horários, preços, tempos de deslocamento e notas das praias). Confirme nos canais oficiais antes de publicar.
