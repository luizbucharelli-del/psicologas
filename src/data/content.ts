import { ThemePalette, PsychologistProfile, ServiceItem, PainPoint, Testimonial, FaqItem } from '../types';

export const ASSETS = {
  heroPortrait: '/src/assets/images/hero_psychologist_portrait_1788972198945.jpg',
  officeRoom: '/src/assets/images/clinic_consultation_office_1788972233791.jpg',
  candidAbout: '/src/assets/images/psychologist_about_candid_1788972254724.jpg',
};

export const PALETTES: Record<string, ThemePalette> = {
  terracota: {
    id: 'terracota',
    name: 'Lilás Suave & Lavanda',
    description: 'Minimalista, delicado e acolhedor. Transmite serenidade, escuta atenta e elegância contemporânea.',
    colors: {
      primary: '#845796',
      primaryHover: '#724583',
      primaryLight: '#F5EEF9',
      secondary: '#B897C8',
      bgBase: '#FAF7FC',
      bgCard: '#FFFFFF',
      bgSubtle: '#F3EBF7',
      textMain: '#2A1D32',
      textMuted: '#6B5774',
      border: '#E8DBF0',
      badgeBg: '#EFE2F5',
      badgeText: '#6D3F80',
    },
  },
  salvia: {
    id: 'salvia',
    name: 'Lilás Suave & Lavanda',
    description: 'Minimalista, delicado e acolhedor.',
    colors: {
      primary: '#845796',
      primaryHover: '#724583',
      primaryLight: '#F5EEF9',
      secondary: '#B897C8',
      bgBase: '#FAF7FC',
      bgCard: '#FFFFFF',
      bgSubtle: '#F3EBF7',
      textMain: '#2A1D32',
      textMuted: '#6B5774',
      border: '#E8DBF0',
      badgeBg: '#EFE2F5',
      badgeText: '#6D3F80',
    },
  },
};

export const DEFAULT_PROFILE: PsychologistProfile = {
  name: 'Dra. Fernanda Melo',
  title: 'Psicóloga Clínica & Psicoterapeuta',
  crp: 'CRP 06/142981',
  experienceYears: 9,
  patientsHelped: '850+',
  approach: 'Terapia Cognitivo-Comportamental (TCC) e Abordagem Sistêmica',
  location: 'Vila Mariana • São Paulo, SP',
  onlineService: 'Atendimento Online em todo o Brasil e para Brasileiros no Exterior',
  whatsappNumber: '5511998765432',
  heroTagline: 'Um refúgio seguro para acolher sua história e reconstruir seu bem-estar.',
  heroDescription: 'Psicoterapia individual online e presencial para jovens e adultos. Atendimento empático, baseado em evidências científicas, sem julgamentos e com sigilo ético absoluto.',
  bioShort: 'Acredito que a psicoterapia não é sobre consertar quem você é, mas sim sobre desatar os nós que impedem sua vida de fluir com leveza e autenticidade.',
  bioFull: [
    'Sou psicóloga clínica formada pela Universidade de São Paulo (USP), com especialização em Terapia Cognitivo-Comportamental pelo Instituto de Psiquiatria (IPq-HCFMUSP) e aprimoramento em Manejo Clínico de Transtornos de Ansiedade e Burnout.',
    'Ao longo de quase uma década de escuta clínica dedicada, percebi que o maior sofrimento humano muitas vezes nasce da sensação de carregar tudo sozinho — da cobrança por perfeição, do medo de desagradar e da dificuldade em lidar com transições dolorosas.',
    'No meu consultório (seja no espaço físico ou na sala virtual protegida), você encontra um ambiente onde todas as suas vulnerabilidades são recebidas com genuína empatia, rigor ético e ferramentas práticas para o seu cotidiano.',
  ],
  education: [
    {
      institution: 'Universidade de São Paulo (USP)',
      degree: 'Bacharelado e Formação de Psicólogo',
      year: '2015',
    },
    {
      institution: 'IPq - Hospital das Clínicas (HCFMUSP)',
      degree: 'Especialização em TCC e Transtornos de Humor',
      year: '2018',
    },
    {
      institution: 'Instituto Sedes Sapientiae',
      degree: 'Formação em Vínculos, Luto e Relações Interpessoais',
      year: '2021',
    },
    {
      institution: 'Conselho Regional de Psicologia (CRP-06)',
      degree: 'Cadastro e Habilitação Ativa para Atendimento Online (e-Psi)',
      year: 'Regular',
    },
  ],
};

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'ansiedade',
    icon: 'Activity',
    title: 'Ansiedade & Sobrecarga Mental',
    description: 'Pensamentos acelerados que não silenciam, insônia e a sensação constante de que algo ruim vai acontecer.',
    symptoms: [
      'Preocupação excessiva com o futuro',
      'Tensão muscular e aperto no peito',
      'Dificuldade de desacelerar e relaxar',
    ],
  },
  {
    id: 'burnout',
    icon: 'ZapOff',
    title: 'Burnout & Exaustão Emocional',
    description: 'Quando o trabalho e a rotina drenam completamente a sua energia e até os momentos de descanso não revigoram.',
    symptoms: [
      'Sensação de insuficiência crônica',
      'Perda de entusiasmo por coisas que gostava',
      'Cansaço físico e mental persistente',
    ],
  },
  {
    id: 'relacionamentos',
    icon: 'HeartHandshake',
    title: 'Relacionamentos & Limites',
    description: 'Dificuldade em dizer "não", medo da rejeição, dependência afetiva ou conflitos repetitivos com quem convive.',
    symptoms: [
      'Dificuldade de impor limites saudáveis',
      'Sentimento de carregar a relação sozinho(a)',
      'Medo intenso de abandono ou desaprovação',
    ],
  },
  {
    id: 'autoestima',
    icon: 'Sparkles',
    title: 'Autoestima & Autocrítica Feroz',
    description: 'Uma voz interna julgadora que nunca reconhece suas conquistas e gera constante sensação de não ser bom o suficiente.',
    symptoms: [
      'Comparações desgastantes com outras pessoas',
      'Síndrome do impostor no âmbito profissional',
      'Insegurança para tomar decisões importantes',
    ],
  },
  {
    id: 'luto',
    icon: 'Compass',
    title: 'Luto, Términos & Transições',
    description: 'A dor de uma despedida, divórcio, mudança de cidade ou momentos em que a vida te obriga a recomeçar do zero.',
    symptoms: [
      'Sentimento de vazio e desorientação',
      'Dificuldade em elaborar o adeus',
      'Necessidade de reorganizar a identidade',
    ],
  },
  {
    id: 'desanimo',
    icon: 'CloudRain',
    title: 'Desânimo & Falta de Sentido',
    description: 'Dias que parecem todos iguais no piloto automático, com sensação de vazio ou perda de propósito existencial.',
    symptoms: [
      'Sensação de apatia emocional',
      'Isolamento e vontade de se esconder',
      'Falta de perspectiva para os próximos passos',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'psicoterapia-individual',
    title: 'Psicoterapia Individual',
    subtitle: 'Para Jovens e Adultos',
    duration: '50 minutos',
    modality: 'ambas',
    highlight: true,
    summary: 'Um espaço confidencial e contínuo para investigar as raízes do seu sofrimento, identificar crenças limitantes e construir repertório emocional para uma vida mais leve.',
    benefits: [
      'Mapeamento dos gatilhos de ansiedade e estresse',
      'Desenvolvimento de inteligência emocional e autocompaixão',
      'Construção de autonomia e clareza nas tomadas de decisão',
      'Atendimento semanal com acompanhamento próximo',
    ],
  },
  {
    id: 'atendimento-online',
    title: 'Atendimento Online',
    subtitle: 'Brasil e Brasileiros no Exterior',
    duration: '50 minutos',
    modality: 'online',
    highlight: false,
    summary: 'Com a mesma eficácia científica do presencial, realize suas sessões no conforto da sua casa ou onde estiver, via videochamada criptografada com total sigilo.',
    benefits: [
      'Sem deslocamento ou trânsito: flexibilidade para sua rotina',
      'Plataforma segura e sigilosa (Google Meet / Zoom seguro)',
      'Acolhimento para expatriados e brasileiros pelo mundo',
      'Autorizada e registrada pelo Conselho Federal de Psicologia (e-Psi)',
    ],
  },
  {
    id: 'atendimento-presencial',
    title: 'Atendimento Presencial',
    subtitle: 'Consultório Acolhedor em SP',
    duration: '50 minutos',
    modality: 'presencial',
    highlight: false,
    summary: 'Um consultório planejado com iluminação natural suave, isolamento acústico refinado e atmosfera serena para desconectar do ritmo frenético da cidade.',
    benefits: [
      'Ambiente privativo e seguro próximo ao metrô',
      'Café, chás selecionados e recepção confortável',
      'Isolamento acústico de alto padrão para sigilo irrestrito',
      'Estacionamento no local e acessibilidade',
    ],
  },
  {
    id: 'terapia-casal',
    title: 'Terapia de Casal',
    subtitle: 'Diálogo, Vínculo e Alinhamento',
    duration: '60 a 75 minutos',
    modality: 'ambas',
    highlight: false,
    summary: 'Um espaço neutro e mediado para que o casal possa romper padrões disfuncionais de comunicação, restaurar a cumplicidade e tomar decisões conscientes.',
    benefits: [
      'Compreensão dos ciclos de cobrança e distanciamento',
      'Comunicação não-violenta e alinhamento de expectativas',
      'Ressignificação de mágoas e fortalecimento do afeto',
      'Clareza para o futuro do relacionamento',
    ],
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Primeiro Contato no WhatsApp',
    description: 'Clique no botão de agendamento. Minha equipe ou eu mesma responderemos tirando dúvidas iniciais sobre disponibilidade de horários e valores.',
  },
  {
    step: '02',
    title: 'Alinhamento & Primeira Consulta',
    description: 'Definimos a modalidade (online ou presencial) e reservamos seu horário. O primeiro encontro é dedicado a acolher sua queixa principal.',
  },
  {
    step: '03',
    title: 'Plano Psicoterapêutico',
    description: 'Juntos desenhamos os objetivos terapêuticos e a frequência (geralmente semanal de 50 minutos), respeitando seu ritmo individual.',
  },
  {
    step: '04',
    title: 'Evolução & Autonomia',
    description: 'Com sessões contínuas e técnicas baseadas em evidências, você adquire clareza e ferramentas para ser o autor da sua própria história.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    authorInitials: 'M. S.',
    ageAndCity: '33 anos • São Paulo, SP',
    context: 'Paciente em Psicoterapia há 1 ano e meio',
    quote: 'Cheguei ao consultório no ápice de crises de pânico e com o trabalho me consumindo. O acolhimento sem julgamentos fez com que eu finalmente me sentisse seguro para olhar pras minhas dores. Hoje sei colocar limites e voltei a ter noites de sono tranquilas.',
  },
  {
    id: '2',
    authorInitials: 'L. B.',
    ageAndCity: '29 anos • Berlim, Alemanha (Atendimento Online)',
    context: 'Expatriada, acompanhamento online há 10 meses',
    quote: 'Mudar de país me trouxe uma sensação de solidão avassaladora. Fazer terapia na minha língua materna com alguém tão sensível e tecnicamente preparada foi o maior divisor de águas da minha adaptação no exterior. Recomendo de olhos fechados.',
  },
  {
    id: '3',
    authorInitials: 'R. & C.',
    ageAndCity: '38 e 41 anos • Campinas, SP',
    context: 'Acompanhamento de Casal',
    quote: 'Nossas conversas sempre terminavam em discussões desgastantes. O espaço mediado nos ajudou a entender o que cada um realmente precisava sem se agredir. Salvou nossa relação e nos aproximou de verdade.',
  },
  {
    id: '4',
    authorInitials: 'G. V.',
    ageAndCity: '26 anos • Rio de Janeiro, RJ',
    context: 'Paciente em atendimento online há 8 meses',
    quote: 'A Dra. Fernanda tem uma precisão cirúrgica ao apontar padrões que eu repetia há anos sem perceber. As sessões são acolhedoras mas também muito práticas. Aprendi a lidar com a minha autocrítica constante.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'reembolso',
    category: 'valores',
    question: 'Você atende por convênio médico ou plano de saúde?',
    answer: 'Trabalho na modalidade particular com emissão de recibo e nota fiscal detalhada para reembolso pelo seu plano de saúde. A maioria dos planos (como Bradesco Saúde, Amil, SulAmérica, Omint, Care Plus, Porto Seguro) possui política de reembolso para consultas psicológicas. Auxilio com todas as orientações e relatórios necessários para que você solicite o ressarcimento.',
  },
  {
    id: 'online-funciona',
    category: 'online',
    question: 'A terapia online tem a mesma eficácia que a presencial?',
    answer: 'Sim! Dezenas de estudos científicos internacionais e as diretrizes do Conselho Federal de Psicologia (CFP) comprovam que a psicoterapia online possui exatamente o mesmo nível de eficácia clínica da modalidade presencial. Você economiza tempo de trânsito, tem total flexibilidade e pode estar no ambiente em que se sente mais confortável.',
  },
  {
    id: 'duracao-frequencia',
    category: 'atendimento',
    question: 'Qual é a duração e frequência das sessões?',
    answer: 'Cada sessão tem duração de 50 minutos. Para que haja vínculo terapêutico sólido e evolução consistente, a recomendação padrão é de uma sessão semanal no início. Conforme os objetivos são alcançados e você ganha autonomia, as sessões podem ser espaçadas para quinzenais até a alta terapêutica.',
  },
  {
    id: 'como-saber',
    category: 'geral',
    question: 'Como sei se este é o momento certo para iniciar a terapia?',
    answer: 'Não é preciso estar em uma crise profunda para buscar ajuda. Se você sente que seus sentimentos estão pesados demais para carregar sozinho, se repete conflitos em relações, ou simplesmente deseja se conhecer com maior profundidade, a psicoterapia é para você. Buscar ajuda é um ato de cuidado e maturidade, não de fraqueza.',
  },
  {
    id: 'sigilo',
    category: 'atendimento',
    question: 'Como funciona o sigilo profissional?',
    answer: 'O sigilo é absoluto e protegido pelo Código de Ética Profissional do Psicólogo (Artigo 9º). Absolutamente nada do que é compartilhado em sessão é divulgado a terceiros, familiares ou empregadores. Além disso, as sessões online ocorrem por plataformas com criptografia ponta a ponta e sem gravação.',
  },
  {
    id: 'primeira-sessao',
    category: 'atendimento',
    question: 'O que acontece na primeira sessão?',
    answer: 'A primeira consulta é uma conversa acolhedora de alinhamento. Você terá espaço livre para contar o que te motivou a buscar ajuda agora, quais são suas queixas ou dores principais. Também tiramos dúvidas sobre o funcionamento do processo e avaliamos se a abordagem se adequa perfeitamente ao seu momento.',
  },
];
