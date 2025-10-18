import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Интернет-магазин электроники',
      category: 'ecommerce',
      tags: ['1С:УТ', 'E-commerce', 'Интеграция'],
      description:
        'Разработали полноценный интернет-магазин с интеграцией в 1С:УТ, онлайн-оплатой и личным кабинетом клиента',
      details: [
        'Интеграция с 1С:Управление торговлей для синхронизации товаров и цен',
        'Настройка онлайн-оплаты через Сбербанк и Яндекс.Кассу',
        'Личный кабинет с историей заказов и программой лояльности',
        'Адаптивный дизайн для мобильных устройств',
      ],
      results: 'Рост онлайн-продаж на 45% за первые 3 месяца, сокращение времени обработки заказов в 2 раза',
      emoji: '🏪',
      gradient: 'from-blue-50 to-indigo-50',
    },
    {
      id: 2,
      title: 'Автоматизация производства',
      category: 'automation',
      tags: ['1С:ERP', 'Производство', 'Склад'],
      description:
        'Внедрили 1С:ERP для полного цикла производства — от закупок до склада готовой продукции',
      details: [
        'Настройка производственных процессов и планирования',
        'Автоматический расчёт себестоимости готовой продукции',
        'Складской учёт сырья и материалов',
        'Интеграция с весовым оборудованием',
      ],
      results: 'Сокращение производственного цикла на 30%, прозрачность учёта материалов на 100%',
      emoji: '📊',
      gradient: 'from-purple-50 to-pink-50',
    },
    {
      id: 3,
      title: 'Система для транспортной компании',
      category: 'automation',
      tags: ['1С:Логистика', 'GPS', 'Маршруты'],
      description:
        'Создали решение для управления автопарком и маршрутами доставки на базе 1С',
      details: [
        'Учёт транспортных средств и путевых листов',
        'Планирование маршрутов и контроль ГСМ',
        'Интеграция с GPS-трекерами',
        'Расчёт стоимости перевозок',
      ],
      results: 'Экономия топлива на 20%, оптимизация маршрутов снизила километраж на 15%',
      emoji: '🚚',
      gradient: 'from-green-50 to-emerald-50',
    },
    {
      id: 4,
      title: 'CRM для сферы услуг',
      category: 'crm',
      tags: ['1С:CRM', 'Воронка продаж', 'Аналитика'],
      description:
        'Настроили 1С:CRM с воронкой продаж, автоматической рассылкой и аналитикой',
      details: [
        'Воронка продаж с автоматизацией этапов',
        'Email и SMS рассылки по сегментам клиентов',
        'Дашборды с аналитикой по продажам',
        'Интеграция с телефонией и почтой',
      ],
      results: 'Конверсия лидов в сделки выросла на 35%, время обработки заявки сократилось в 3 раза',
      emoji: '💼',
      gradient: 'from-orange-50 to-red-50',
    },
    {
      id: 5,
      title: 'Интернет-магазин одежды',
      category: 'ecommerce',
      tags: ['1С:Розница', 'Модуль Моего склада', 'Marketplace'],
      description:
        'Магазин модной одежды с интеграцией складского учёта и маркетплейсов',
      details: [
        'Синхронизация с Wildberries и Ozon',
        'Управление размерными сетками и характеристиками',
        'Программа лояльности и скидочные карты',
        'Интеграция с физическими магазинами',
      ],
      results: 'Увеличение среднего чека на 25%, омниканальные продажи выросли на 60%',
      emoji: '👗',
      gradient: 'from-pink-50 to-rose-50',
    },
    {
      id: 6,
      title: 'Автоматизация ресторана',
      category: 'automation',
      tags: ['1С:Общепит', 'Кухня', 'Терминалы'],
      description:
        'Комплексная автоматизация сети ресторанов с кухонными терминалами',
      details: [
        'Модуль кухни с передачей заказов на терминалы',
        'Складской учёт продуктов с контролем сроков',
        'Калькуляция блюд и техкарты',
        'Интеграция с кассовым оборудованием',
      ],
      results: 'Сокращение времени обработки заказа на 40%, снижение списаний продуктов на 30%',
      emoji: '🍽️',
      gradient: 'from-yellow-50 to-amber-50',
    },
    {
      id: 7,
      title: 'Медицинская клиника',
      category: 'automation',
      tags: ['1С:Медицина', 'Электронная карта', 'Расписание'],
      description:
        'Система учёта для частной медклиники с электронными картами пациентов',
      details: [
        'Электронные медицинские карты пациентов',
        'Расписание врачей и онлайн-запись',
        'Учёт медикаментов и расходных материалов',
        'Интеграция с лабораторным оборудованием',
      ],
      results: 'Время приёма пациента сократилось на 20%, удобство работы врачей повысилось',
      emoji: '🏥',
      gradient: 'from-teal-50 to-cyan-50',
    },
    {
      id: 8,
      title: 'Строительная компания',
      category: 'automation',
      tags: ['1С:Управление строительством', 'Смета', 'Подряды'],
      description:
        'Автоматизация строительных проектов с контролем сметы и подрядчиков',
      details: [
        'Управление строительными проектами и объектами',
        'Сметные расчёты и контроль бюджета',
        'Учёт материалов на объектах',
        'Взаиморасчёты с подрядчиками',
      ],
      results: 'Контроль бюджета проектов улучшился на 50%, перерасход снизился на 25%',
      emoji: '🏗️',
      gradient: 'from-slate-50 to-gray-50',
    },
    {
      id: 9,
      title: 'Оптовая торговля',
      category: 'automation',
      tags: ['1С:УТ', 'B2B', 'Прайс-листы'],
      description:
        'Система для оптовой торговли с многоуровневыми ценами и кредитными лимитами',
      details: [
        'Гибкая система ценообразования для разных клиентов',
        'Контроль кредитных лимитов и отсрочек',
        'Автоматическая генерация прайс-листов',
        'B2B портал для клиентов',
      ],
      results: 'Рост повторных заказов на 40%, снижение дебиторской задолженности на 30%',
      emoji: '📦',
      gradient: 'from-indigo-50 to-violet-50',
    },
    {
      id: 10,
      title: 'Бухгалтерский учёт холдинга',
      category: 'automation',
      tags: ['1С:Бухгалтерия', 'Консолидация', 'Отчётность'],
      description:
        'Консолидированный учёт для холдинга из 5 юридических лиц',
      details: [
        'Единая консолидированная отчётность',
        'Автоматическая выгрузка в ФНС и фонды',
        'Межфирменные расчёты и взаимозачёты',
        'Контроль договоров и платежей',
      ],
      results: 'Время подготовки отчётности сократилось в 4 раза, ошибки в учёте снизились на 95%',
      emoji: '📑',
      gradient: 'from-blue-50 to-sky-50',
    },
  ];

  const categories = [
    { id: 'all', label: 'Все проекты' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'automation', label: 'Автоматизация' },
    { id: 'crm', label: 'CRM' },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => navigate('/')} className="text-2xl font-bold tracking-tight">
              RunSystems
            </button>
            <Button variant="ghost" onClick={() => navigate('/')}>
              На главную
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">Проекты</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Мы реализовали более 500 проектов по автоматизации бизнеса. Вот некоторые из них.
          </p>
        </div>
      </section>

      <section className="pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} rounded-2xl mb-6 overflow-hidden`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-8xl opacity-10">{project.emoji}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{project.description}</p>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900">Что сделали:</div>
                    <ul className="space-y-1.5">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="text-sm font-medium text-gray-900 mb-2">Результат:</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{project.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 lg:px-12 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="text-2xl font-bold">RunSystems</div>
            <div className="text-sm text-gray-500">
              © 2024 RunSystems. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
