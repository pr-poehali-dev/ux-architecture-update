import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold tracking-tight">RunSystems</div>

            <nav className="hidden lg:flex items-center gap-10">
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                Контакты
              </button>
            </nav>

            <button
              className="lg:hidden flex flex-col gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="w-6 h-0.5 bg-black transition-all"></span>
              <span className="w-6 h-0.5 bg-black transition-all"></span>
              <span className="w-6 h-0.5 bg-black transition-all"></span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col px-6 py-4 gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-sm font-medium text-gray-700"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-left text-sm font-medium text-gray-700"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-sm font-medium text-gray-700"
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-left text-sm font-medium text-gray-700"
              >
                Контакты
              </button>
            </nav>
          </div>
        )}
      </header>

      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Продажа, внедрение<br />и поддержка <span className="text-primary">1С</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              Создаём интернет-магазины и автоматизируем бизнес-процессы с помощью 1С:Предприятие
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection('contacts')}
              className="px-8 py-6 text-base"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 lg:mb-20 tracking-tight">
            Наши услуги
          </h2>

          <div className="space-y-1">
            <div className="group border-b border-gray-200 py-8 lg:py-10 cursor-pointer hover:bg-white transition-all">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Продажа и внедрение 1С
                  </h3>
                  <p className="text-gray-600 text-lg max-w-3xl">
                    Поставка лицензий, настройка под задачи бизнеса, обучение персонала и миграция данных
                  </p>
                </div>
                <div className="hidden lg:block text-6xl font-light text-gray-300 group-hover:text-primary transition-colors">
                  01
                </div>
              </div>
            </div>

            <div className="group border-b border-gray-200 py-8 lg:py-10 cursor-pointer hover:bg-white transition-all">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Создание интернет-магазинов
                  </h3>
                  <p className="text-gray-600 text-lg max-w-3xl">
                    Разработка e-commerce решений с интеграцией в 1С, CRM и платёжные системы
                  </p>
                </div>
                <div className="hidden lg:block text-6xl font-light text-gray-300 group-hover:text-primary transition-colors">
                  02
                </div>
              </div>
            </div>

            <div className="group border-b border-gray-200 py-8 lg:py-10 cursor-pointer hover:bg-white transition-all">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Техническая поддержка
                  </h3>
                  <p className="text-gray-600 text-lg max-w-3xl">
                    Сопровождение 1С, доработка конфигураций, обновление версий и консультации
                  </p>
                </div>
                <div className="hidden lg:block text-6xl font-light text-gray-300 group-hover:text-primary transition-colors">
                  03
                </div>
              </div>
            </div>

            <div className="group border-b border-gray-200 py-8 lg:py-10 cursor-pointer hover:bg-white transition-all">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Автоматизация процессов
                  </h3>
                  <p className="text-gray-600 text-lg max-w-3xl">
                    Настройка документооборота, складского учёта, управления производством
                  </p>
                </div>
                <div className="hidden lg:block text-6xl font-light text-gray-300 group-hover:text-primary transition-colors">
                  04
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 lg:mb-20 tracking-tight">Проекты</h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl opacity-10">🏪</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-primary">E-COMMERCE</div>
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  Интернет-магазин электроники
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Разработали полноценный интернет-магазин с интеграцией в 1С:УТ, онлайн-оплатой и
                  личным кабинетом клиента
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl opacity-10">📊</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-primary">АВТОМАТИЗАЦИЯ</div>
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  Учёт для производства
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Внедрили 1С:ERP для полного цикла производства — от закупок до склада готовой
                  продукции
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl opacity-10">🚚</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-primary">ЛОГИСТИКА</div>
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  Система для транспортной компании
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Создали решение для управления автопарком и маршрутами доставки на базе 1С
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl opacity-10">💼</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-primary">CRM</div>
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  CRM для сферы услуг
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Настроили 1С:CRM с воронкой продаж, автоматической рассылкой и аналитикой
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">О компании</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  RunSystems — команда специалистов по автоматизации бизнеса с опытом работы более
                  15 лет. Мы являемся официальным партнёром 1С и помогаем компаниям повышать
                  эффективность с помощью современных ИТ-решений.
                </p>
                <p>
                  Наша экспертиза охватывает внедрение 1С, разработку интернет-магазинов,
                  интеграцию систем и техническую поддержку. Мы работаем с малым и средним бизнесом
                  по всей России.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">500+</div>
                <div className="text-gray-600">Выполненных проектов</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">15</div>
                <div className="text-gray-600">Лет на рынке</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">200+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">24/7</div>
                <div className="text-gray-600">Техническая поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-12 tracking-tight">Контакты</h2>

              <div className="space-y-8">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">ТЕЛЕФОН</div>
                  <a
                    href="tel:+74951234567"
                    className="text-2xl font-semibold hover:text-primary transition-colors"
                  >
                    +7 (495) 123-45-67
                  </a>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">EMAIL</div>
                  <a
                    href="mailto:info@runsystems.ru"
                    className="text-2xl font-semibold hover:text-primary transition-colors"
                  >
                    info@runsystems.ru
                  </a>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">АДРЕС</div>
                  <div className="text-xl text-gray-700">
                    г. Москва, ул. Примерная, д. 1<br />
                    офис 100
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">РЕЖИМ РАБОТЫ</div>
                  <div className="text-xl text-gray-700">
                    Пн-Пт: 9:00 — 18:00<br />
                    Сб-Вс: выходной
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-primary focus:ring-0 text-lg placeholder:text-gray-400 transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-primary focus:ring-0 text-lg placeholder:text-gray-400 transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-primary focus:ring-0 text-lg placeholder:text-gray-400 transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-primary focus:ring-0 text-lg placeholder:text-gray-400 transition-colors resize-none bg-transparent"
                  ></textarea>
                </div>
                <Button size="lg" className="px-8 py-6 text-base">
                  Отправить заявку
                </Button>
              </form>
            </div>
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

export default Index;
