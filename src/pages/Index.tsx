import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black">ПОРТФОЛИО</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="story-link text-black hover:text-gray-600 transition-colors"
              >
                Обо мне
              </a>
              <a
                href="#portfolio"
                className="story-link text-black hover:text-gray-600 transition-colors"
              >
                Работы
              </a>
              <a
                href="#contact"
                className="story-link text-black hover:text-gray-600 transition-colors"
              >
                Контакты
              </a>
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 animate-fade-in">
              Творческий
              <br />
              <span className="text-gray-500">Дизайнер</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
              Создаю уникальные визуальные решения, которые вдохновляют и
              запоминаются
            </p>
            <Button size="lg" className="hover-scale animate-fade-in">
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Обо мне</h2>
              <p className="text-lg text-gray-600 mb-6">
                Я творческий дизайнер с 5+ летним опытом создания визуальных
                решений. Специализируюсь на брендинге, веб-дизайне и
                иллюстрации.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Мой подход — сочетание функциональности и эстетики. Каждый
                проект получает индивидуальное внимание и творческий подход.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" className="hover-scale">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать CV
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="/img/16afb3dd-75fe-434d-bb85-0a0636dea0d3.jpg"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Избранные работы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group hover-scale cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Проект {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Описание творческого проекта и используемых техник
                  </p>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Свяжитесь со мной
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Начнем сотрудничество</h3>
              <p className="text-gray-300 mb-8">
                Готов обсудить ваш проект и воплотить креативные идеи в жизнь.
                Свяжитесь со мной любым удобным способом.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={20} />
                  <span>hello@designer.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={20} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={20} />
                  <span>Москва, Россия</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="sm" className="hover-scale">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="hover-scale">
                  <Icon name="Linkedin" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="hover-scale">
                  <Icon name="Github" size={16} />
                </Button>
              </div>
            </div>
            <Card className="p-6 bg-white text-black">
              <h3 className="font-bold text-lg mb-4">Быстрая связь</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black h-32"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                <Button className="w-full hover-scale">
                  Отправить сообщение
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
