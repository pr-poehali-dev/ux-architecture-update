import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  const services = [
    {
      icon: 'Code2',
      title: 'Системная интеграция',
      description: 'Интеграция корпоративных систем и платформ для бесперебойной работы бизнеса'
    },
    {
      icon: 'Database',
      title: 'Внедрение 1C',
      description: 'Продажа, внедрение и техническая поддержка решений на базе 1С:Предприятие'
    },
    {
      icon: 'Globe',
      title: 'Разработка веб-решений',
      description: 'Создание интернет-магазинов, корпоративных порталов и веб-приложений'
    },
    {
      icon: 'Shield',
      title: 'Информационная безопасность',
      description: 'Аудит, внедрение и сопровождение систем защиты информации'
    },
    {
      icon: 'Cloud',
      title: 'Облачные решения',
      description: 'Миграция в облако, построение гибридной инфраструктуры'
    },
    {
      icon: 'Headphones',
      title: 'Техническая поддержка',
      description: 'Комплексная поддержка ИТ-инфраструктуры 24/7'
    }
  ];

  const projects = [
    {
      title: 'Автоматизация логистики',
      client: 'Крупная логистическая компания',
      description: 'Внедрение системы управления складом и транспортом на базе 1С',
      tag: '1C'
    },
    {
      title: 'Интернет-магазин электроники',
      client: 'Розничная сеть',
      description: 'Разработка высоконагруженного интернет-магазина с интеграцией в учетные системы',
      tag: 'E-commerce'
    },
    {
      title: 'Корпоративный портал',
      client: 'Производственное предприятие',
      description: 'Создание единой информационной среды для 500+ сотрудников',
      tag: 'Portal'
    }
  ];

  const vacancies = [
    { title: 'Backend разработчик', level: 'Middle/Senior', tech: 'Python, FastAPI' },
    { title: 'Frontend разработчик', level: 'Middle', tech: 'React, TypeScript' },
    { title: 'DevOps инженер', level: 'Senior', tech: 'Kubernetes, GitLab CI' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RS</span>
              </div>
              <span className="font-bold text-xl">RunSystems</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {['Услуги', 'Проекты', 'О компании', 'Карьера', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            <Button onClick={() => scrollToSection('контакты')} className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Системная интеграция
              <br />
              <span className="text-primary">нового уровня</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Комплексные ИТ-решения для автоматизации бизнес-процессов. Внедрение 1С, разработка
              веб-приложений, техническая поддержка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('услуги')} className="text-base">
                Наши услуги
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('проекты')}
                className="text-base"
              >
                Портфолио проектов
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по автоматизации и цифровой трансформации бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="проекты" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Успешные кейсы внедрения и автоматизации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="FolderOpen" size={64} className="text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    {project.tag}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.client}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">О компании</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">реализованных проектов</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">специалистов в штате</div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground text-center mb-6">
                RunSystems — ведущий системный интегратор, специализирующийся на комплексной
                автоматизации бизнес-процессов. Мы предлагаем полный цикл услуг от консалтинга и
                разработки до внедрения и технической поддержки.
              </p>
              <p className="text-lg text-muted-foreground text-center">
                Наша команда — это опытные профессионалы, которые работают на результат. Мы
                используем передовые технологии и лучшие практики индустрии для решения самых
                сложных задач.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="карьера" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Карьера в RunSystems</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к команде профессионалов
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {vacancies.map((vacancy, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all cursor-pointer hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{vacancy.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Briefcase" size={16} />
                          {vacancy.level}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Code2" size={16} />
                          {vacancy.tech}
                        </span>
                      </div>
                    </div>
                    <Icon
                      name="ChevronRight"
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                      size={24}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Не нашли подходящую вакансию? Отправьте нам резюме!
            </p>
            <Button variant="outline" size="lg">
              hr@runsystems.ru
              <Icon name="Mail" className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Контакты</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-muted-foreground">
                        г. Москва, ул. Примерная, д. 1, офис 100
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">info@runsystems.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Input placeholder="Телефон" />
                  <Textarea placeholder="Сообщение" rows={4} />
                  <Button className="w-full" size="lg">
                    Отправить
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RS</span>
                </div>
                <span className="font-bold text-xl">RunSystems</span>
              </div>
              <p className="text-sm text-white/70">
                Системная интеграция и автоматизация бизнеса
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Системная интеграция</li>
                <li>Внедрение 1C</li>
                <li>Разработка веб-решений</li>
                <li>Техподдержка</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@runsystems.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2024 RunSystems. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
