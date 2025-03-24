import React, { useState } from "react";
import './FAQ.css'
import OpenList from '../../assets/img/open-list.png';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <img
          src={OpenList}
          alt=""
          className={`faq-arrow ${isOpen ? 'rotated' : ''}`} // Поворот стрелки
        />
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <span>{answer}</span>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: "Что нужно, чтобы начать обучение?",
      answer: "Для начала обучения потребуется соответствующий возраст для выбранной программы, желание учиться и готовность приступить к занятиям. Также нужен пакет документов: гражданский паспорт, СНИЛС, фотография 3,5 × 4 см на матовом фоне, шоферская медицинская справка (подтверждение пригодности к управлению транспортом). Если вам меньше 18 лет, необходимо письменное согласие родителей на обучение и разрешение на сдачу экзамена в ГАИ или их личное присутствие на экзамене. При этом сдать экзамен можно уже с 17 лет при наличии разрешения родителей. С этими условиями вы готовы начать обучение!",
    },
    {
      question: "Дополнительные расходы",
      answer: "При обучении в автошколе предусмотрены некоторые дополнительные расходы. Вам потребуется оплатить прохождение медицинской комиссии для получения справки. По окончании курса автошколы вы можете приобрести дополнительные часы вождения, если почувствуете необходимость в практике. Также есть возможность взять дополнительные часы вождения уже после получения прав, чтобы подготовиться к управлению личным транспортным средством. Все это поможет вам чувствовать себя увереннее за рулем!",
    },
    {
      question: "Прохождение водительской медкомиссии",
      answer: "Для прохождения водительской медкомиссии важно учитывать состояние вашего здоровья. Обследование проводится в специализированных медицинских учреждениях или клиниках, имеющих соответствующую лицензию. Вам нужно будет пройти осмотр у ряда врачей и, при необходимости, сдать анализы. После успешного прохождения вы получите медицинское заключение с указанным сроком действия, которое подтверждает вашу пригодность к управлению транспортным средством. Этот документ обязателен для начала обучения и сдачи экзаменов.",
    },
    {
        question: "Оплата госпошлины",
        answer: "Оплата госпошлины обязательна перед сдачей экзамена в ГАИ. Сумма составляет 2000 рублей. Если вы сдаете экзамен в составе группы, деньги собираются коллективно. В случае индивидуальной сдачи оплата производится самостоятельно по прибытии. Госпошлина перечисляется на расчетный счет управления ГАИ. Без этой оплаты допуск к экзамену невозможен."
    },
    {
        question: "Минимальный возраст обучения в автошколе",
        answer: "По закону обучение в автошколе можно начать с 16 лет согласно статье 26 Федерального закона о безопасности дорожного движения. Однако срок действия водительского удостоверения начинается только с даты исполнения 18 лет. При этом сдавать экзамен в ГАИ разрешается уже с 17 лет при наличии письменного согласия родителей или законных представителей. Таким образом, вы можете пройти курс раньше, но полноценно управлять транспортным средством сможете только после 18 лет."
    },
    {
        question: "Иностранным гражданам",
        answer: "Обучение в автошколе для иностранных граждан возможно при соблюдении ряда условий. Необходима постоянная регистрация (допускается сроком на 3-4 месяца) по месту пребывания, а также наличие СНИЛС. Кроме того, потребуется шоферская медицинская справка, полученная по месту регистрации, и нотариально заверенный перевод паспорта. При наличии этих документов иностранные граждане могут пройти обучение и получить водительское удостоверение на общих основаниях."
    },
    {
        question: "Сроки обучения в автошколе",
        answer: "Срок обучения в автошколе составляет от 3 до 3,5 месяцев. Продолжительность зависит от комплектации группы и графика занятий. За это время вы пройдете теоретическую подготовку и практические уроки вождения, чтобы быть полностью готовыми к сдаче экзамена в ГАИ."
    },
    {
        question: "Раписание автошколы",
        answer: "Автошкола работает с 11:00 до 18:00 по предварительной записи. Вы можете записаться на обучение в удобное для вас время, оставив заявку. Прием заявок осуществляется круглосуточно, что позволяет выбрать подходящий график занятий без лишних сложностей."
    },
    {
        question: "Замена инструктора",
        answer: "Замена инструктора возможна при наличии аргументированного заявления. Вопрос рассматривается, если возникает психолого-физиологическая несовместимость между учеником и инструктором. Также можно обсудить замену заранее с старшим мастером автошколы. В любом случае, решение принимается индивидуально, чтобы обеспечить комфортное обучение."
    },
    {
        question: "Сопровождение учеников в ГАИ",
        answer: "Представитель автошколы сопровождает группу учеников на экзамен в ГАИ. Он предъявляет документы каждого экзаменуемого и обеспечивает поддержку на всех этапах — от сдачи экзамена до момента получения водительского удостоверения. Это помогает сделать процесс организованным и комфортным для обучающихся."
    },
    {
        question: "Как забрать документы из автошколы?",
        answer: "Для того чтобы забрать свои документы из автошколы, необходимо подать личное аргументированное заявление на имя директора. Процедура осуществляется в соответствии с законом, после чего вам вернут все предоставленные ранее документы."
    },
    {
        question: "Налоговый вычет",
        answer: "Согласно закону, учащийся может получить налоговый вычет в размере 13% от стоимости обучения. Для этого необходимо самостоятельно подать документы в налоговую инспекцию по месту регистрации. Обратите внимание, что вычет распространяется только на теоретическую часть обучения."
    }
  ];

  return (
    <div className="faq-header">
      <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
      <div className="questions">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;