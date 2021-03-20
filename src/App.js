import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel.jsx";
import "./App.css";

const items = [
  {
    name: "First slide",
    imageURL: "https://miro.medium.com/max/1838/1*MI686k5sDQrISBM6L8pf5A.jpeg",
  },
  {
    name: "Second slide",
    imageURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMWFRUXFRgYFxcYFxcWFxgXFRcXGBYXFxgYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0dHR0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABFEAABAwIDBQQHBQYFAgcAAAABAAIRAyEEEjEFQVFhcRMigZEGMqGxwdHwFEJS4fEjM2JygpIVU6Ky0geTFkNUY3OD4v/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIxEBAAICAwABBAMAAAAAAAAAAAERAjESIUEDEzJRYQRC0f/aAAwDAQACEQMRAD8A2g9PnQApBaYGDk8oYUwEU6YqSYoGCdJPCCKUp4Um00EVIBFbQKs0cKoqlkSyLVbg0VuDG9BjZExYto4QIJwiFMsMUuzWkMIpjCIUyuzUwxaX2RSGEQpmZEsi0xhEnYJVKZoanDVofYimGFQpTDEixaDMMm+yklBnZE4YtB2FTswyDPyJZFefQQjSQVHtUIVw0VA0FUVoTgI5olIUkAg1SDUZtJTFNAANUwxGbTRG00FYMSVvIkraU5kJ0EPTh6y0OCpAoAepZ0B5SCEKicVEBoU8iCKqf7SFLWh2sVmiwKkMSFAY66lq2WtCkKzRvCx/tnNUcZiOeqljp/trB94KQxY4rgsRiCNDN0WjtN4Usd0MQFMVAuNbtewMwrmH2qTvQdQ1ymCsXDY+dbK9TryqLwUgFWbURW1FQcBEAQGvUw9AQhIUgmBUwUU7aQUxSCZpUkKDdSCh2KsBqllVspTdQlROGV8NSypaUzhhlL7KFdcxPCpTOqYRBOFWuWJ8gRKYwwqmcMtLIpimqUyjRTdmtU0QoGgiUzuySWmKISQeT/agCiNxQ4rMr0iRwVWrmAG8qDoDXTjELnGYh03lHFZ3FQbnbqJxKxDVKGKz9PapI3hiiE1TGd2VlYZ5Op0SxNW30FFtd/xEXEoL8cWrC7s+vHt9yOazfxBKS21T2iHclB9Qu39CsygRuIRqU3j64qKesx7TMDr+SZ9R/HwhWQ+RfXyPtVN+LE6WRExVmx0VinXy3k9FWeCQMtwd8hBD7w25+rwqNrDbYldDs/H2uuAY2Hcx1v5raw5rMpirGanMFwvlM6P/AA7vMIruWYgFHZUXDs22XRHitHCba3Eqq6xtVFbUWLRxwO9W6WIQarXqYcqFOsrDKqC2CpgquHqbXIqw1yIHqpmUg9BZzJZlXD0+dUGLk4KCHp86qDylmQc6WdAUFPKDmT5kBZTZkPMolyA2ZJBzpkZfO9Ou4aOKM3FP3mUAkHkeiZqC23Eu4T0SOIP8QjdJVUQnA+vrVBabinbneYlHbj38Gu+uRVVhaRcQevDj+Sjp8x8kF120SfusHTN8Sg9s5xkkdDKi241jyCiaU8lBPO7i3pE+8aJweTfIqGQzBS7E6qgjmfwn2/JSpHgHA74P5IDQRf3Ioe7QuMdSoLTartO8d0/oEN9QDcSf4kAdFMApQIx/OI3AmPropCvA0Gv10V/ZuApVaVSXZKzBmGYjs3ibCTGV27nbmssgG4+uSUFmJudPretLZmKIcWuquY17SDvaeGYcPCVnQSiMJuAJ8LidVQzBuESD4FHYTfjCG2mDeeqkAVBdwuOcyAStjC7ZGhXPloITQdEodazbI4q5R223eVxLQU4lRbegU9st4q3S2q2dfFebtcQUali3jQk/Wipb1FlcESLqWdcLsDbTm1Wsee64xfcdx87LsS9VVnOn7RVM6WdBb7ROKipion7RBb7RP2ip9on7RBdFRP2ip9opCoqlrXaJZ1VzpCogsZkkDOkiPBcoOh8CpMw7t1+MfkU4xFIgd2DvvafgkDTNw/L1+dliwqlEi4+vn4IQcVa72jajXePzChVpu3tHUflZW1oJtRTYAeSi1wiIB6/MKAIVQdsg8UWmN57p56Tz4IDX8x7ii0nAajz+BCgmXGQ0iD7P0SAIPeFvD2JHERr5WIPQjTyVlj2VREwRe5A/VBVzDcmarH2caX6jQlJuCMSCFbAw9PnSGFP6IjMIfA7x8UA6jrKDHI9TBkaItDDAi4v5EcksBD1Nr9/mjtwwHMJHCA3FuWqlgDHQbeSITw3pzhOBjqp0MO+DABG/26T0QFoEakXKsFoI0QA3Xfy+venY/wDVA/ZjWT9cU7p1j5KYKll5a7kAC7eiME6I4ATZRyBQV6jfNbmyPSR7SG1jmbpMd4cOvvWa4j7whA7gOv18EsejYes17Q5hlp0I+rKRC4LCY2pROak6xiRqDHI/quo2Zt6nVEGGP0yk69D8FbaahCZIvTZlUJKU5colyIfMnzqEp4VoT7RPnVaviqbPXe1p4EifLVVxtagf/Mb7R7wg0O0TrOrbUoNsajfDve5JOkeR/wCEV99B/wDYfknGyK3+VUHRp9y9Nzjp1t7lNh5e2f0WOLVvLzsOv/lVP7SiM2RiNzKvkV6TUqAamPH4KVSqB974+xWkt5qdj4qb0ql/4T5qTdjYr/Jef6T8l6KMQ2JJA628+ClnGsjwP5pRbzo7DxP/AKd3kfLVONi4r/JqDwsvQxUE8uMmfFSfVAHLrPuSi3no2JiTY0n/ANiIzYGIOrCBzzR5QV3grgmBJPVEqGIsfIqUW4ml6N192Txz382I9L0XxE+u0f1O92Vdf2o3SeQBt1kQotrDn8vrorQ5tvo1X3vpkf1A+5IejFcSRUYOUuIP+ldJ2w4/BJuIafvD2IOeZ6P1xq+kfFw8jCmPR+sPvMPUm3+lbtTFNH3h7FH7a3TN5kD3qVAxDsCrucwHfc/JRbsGuCRmpkbjLgfKPit84tv4h9dE5xbfxi31vKVAwDsOv/B5n/iiN2PV306ZHNzvhC2jjmaZm+1S+2N/EAlQOdr7ExFi12mgLpAnhMqdTZVVzCOwa182cyoY1uC102W+MW0/ebPUBS7cfib5hUc1T2TiRqxpH8wBUnbJxBuGgGbd8ac7rpO3E6jzT9qNxH14pQ5YbIxX4R/cz/kov2LiT9wf3s92ZdWXHklJ/QpQ5MbIxQ+6f72R5Fyh/gmJn93/AKmf8l11+fmmObn5EoOXGwcSO9kvyfT92ZSdsrE/eoz0LJ9hWtU25h2vyHE0w7hIPgeB5KptrbQFI9jXHaS2IAJjMJsQRpKimw7sZSPdp1C38JGYeF7eC0aG08SD38M8j+Fjp8pPwWdsDbzXsArVQKhLtRlET3RIbHtldAA0/eEfXAKwgVLaTyYOHrNHHIT5gK32p1yv/wC2/wCSCQ38Q8/m1UtpV6jB+xp9oTv7RjWjqCQT9XWhaxOOqAHJRqk8TTcG/MrnNoek9RpLS/IW2c1rYieM6HxVPHt2nUkeqDua9jQB1a6T7Vkf+HcXB/ZGeOZpPv6rEzK0PV2nJkCSdZJJ+EqFXakfhHJV3ej+Mj9y7wGvMRZRd6O4kiexqT/I8+JtpuWe1qFxm1DFw32j2yE6z27GxokChW/7dSP9qSVJ065+0IIA73SmR5yB7CpnEOaP3BcD1PmJPvVYVXfjf5j/AIpPfwLx/wDY+PImFthbo1Hu9VmX+c5R5E3TtBJylrieTSW+YN1TpVCN89SfoeCM7GuNptyke4oDhjwbscI39nAjrmUji2AH95m5MHskkKmMSfon5pjWJ197vmgstxQ1JJ/mbTa780zcfTHqvjrHw+armseXv96Y1N8DyCirtXFMGr25uQv7THkhNLTc1G/1CDfmDCC7EEiDBHDK35KDXRoAOgA9yC8cPIkVJ5NkfFB7fJAc89CDI8nCUJtQj6n3p6j83rAO/mAd7wgtMncRBFzmaT5F8p6td4tkBbxMexuaFVZVIEDQbuHTgnbVjcPKPcgsGnvDIH9A6zIchQzdTB6PZ8rp/tR0t5fNOMU7l5D5IGp4cOuQG/1Nj3J2YRl5ZHMkwfHLBU24tw3jyU/tbjrHkEEGYWnaT7iOloRmYGnFs3gSoDEGZtPGLo325/FUQOBbu4aEn35lOns9lj5X/wD0Uwrnknq4hwaSA50AkNBgk8BJAQUduY2lhmguIDnSGZnWMRJJO4SLa3XKf4rJJ+0gSd1UAeUwm2ntqm+oe2kPaS0tI9SPuiCfzQBtPC8R4tPyUtaadLaVTdiZA/8Acafio1dtVKbZdiIabicjielieC47beObUdlptAYD6wEFx48QOX6AFKlmPiszlTUYW6et6a19KbieZawDyAusvHbXxWIkVari2D3R3W+IbAPijM2axzRkcQ4C+aIdrGXLos55ymHAgjULEzMu2GONXsMURoisxNVogOJaLwd3Tgj4TC1KnqMJty4cTEox2TXg/s5I1AIJjjqs3lDdYTvobZ21KeUMfmB4uuD4gLewGMqU+9RqkDgDLT4aLlX0ogOaQbmCI3lS7I0xLHFsm4BWo+byWMv4/V4vRsJ6UHSvTP8AOz4tPz8Fs4TG0aoPZuDo1Ew4TpmabjQ68F44Kr3DvPcfE36r130UwoGEoFsCabSd141PFdYziZpxywmIuVw0wq72EcCN3dM+w/BaBw54DzPyQ30yDp9ea25s81gNx8GlNVrxAyOJ6FXi08D0sUMQDoR4R8FUVm1j+A+f5JK1kB3hJEcpmSzIGZLMubQ+ZLOgSnlLBs6WdBSkpYPmTZ0K6YkqWo4qJw9VsycPSxaFRLtFWDk+dLFntE+dVg9Sa9WxZDlIFVw5O6qG3c4AcSQPeli0Cphc5j9utbLW1O9/CA4DxNih4H0pADu1k6ZcoE75m/RSMoXjLqQphcofS4n1KJPUn4CyKNtvJE12M/ha0E33FxkeKTnELGEy6pqMwLBG2R+Mdbbtd0LIxm3v2haXAgbySW24RPHguf171Et/SmNyzNv7Kf8AaKplveqEiSRr3uCz/wDCKnBpjg4LUxG0GuuaYdNycz9dL5lBu0nQcrGNNsuVoixvmLrm3BZ5z+Goj9udds+oJJaSALloLgI3kgWC1cFgahbIYcpu50WvwMbvmrNPa1QOJcGut+EfBWaG3sS4CnIgmJvoePLqrylJifGP2bmvytLgQCTxsQNwG9Hpu+0Oy5W5hmEkuG+5hoPUdVpYrA9nkqOcH57ElkRxAh0DRBxOGw2Sab2sdMu7tQuO+L216K8o1Kdx3DXwNcMa0OGjYsIBGnd/VWaNeTmDWuHG7vKbLmcLiS0AOfmbJBbfQ3tmFvAo2MxbhdhLR0IJ+W6wKM9tBmH7Y1TVYBlcQ226AZBOgII0tZRdsZpbYubvv3h5a+MoGyMflcTVdLQ06ketuAnXmtXEY2m1oeSQ1wBbYk6c9J4X0Umpmmscso05WvSyEtIgixXrXo1VjCUP/iZ/tC81xW0KTqmdrA4QJzNvwtqCLe1bOH9NoblcMsCBDZjcI8FcOpX5MuURD0I4mNQpds3gvNMLtYvLiXQ0yO9UcSQ7iIOqJQxeJqvNMPcwNFoqOjLuM7/Hz0XT6sOU4vR+0anzt4rhWbSxFFv7wPbMS6XXtabc+KTPSasCMzKZB4Zh13mPJajOJZp2Nek0/iPj8yksPC+kdJ5g5mWNzpY6Txv70y3FIxsiWRFhMsUqORLIiU2F1mtLjyEn2K6zY+JIkUKv9jvkpSs7IkGrYZ6O4s6UHeOUe8qxS9EcWdWBvV7fgSlDAyqLmldbS9Ca59Z9MdC4/BWWegh+9XEcmfNylLTh4KS9EpegtD71SoemVvwK0sL6N4WnpTBPF3ePtQp5UU9Km55hrS48GguPkF7GzB0m6MAA8Fx/pN6f4bDgsoNFapBuP3bTul2jt/qqTNLxcszY2JdcUX+Iy/7oQsVgqlL1qbp/CMrneQKxNqemGLxHr1C0fhp/sx7Lz4rF/wAQq/de5oJvlJHXRZ5rxae09uPacgYWH+KJ8tyxK1V9Qy4k9ZhENJxOt9ZO+PirADQy8l3+noefyWZzbjFUbg3QDYDmR85Tdk1usn2KFTEQdPapsqF2oAHj8UuTonVCeQ4C3sUqdCbmw+rJUzLgA1skxqZk6Te3Va20tk9m3MHlwAl7QIyjeZuOFiBZS58OvWUcrdxOqG140joulwOzsNTbNYl54AZhyA4krJx9anm/Z0hT3R60xv4HdohYLKcjWCToASRvnWAlUeTF5jiTogGoSdIjcB7SpNBmd31wU0ti0XneYUhXcLDL5JGi/kRA9qJSpWOo4zIHVY5Q1SDWGIJkTMTv53+pT9lwEqy6uHXseBAgz0Go5Ixo1BlbYkk2Gs31G7hCnKVioUhh6hmKbvrRXW7CqG2QjWDOYGBpAHW6i91RmhgaG0HdIIFwlS2hVE94vkXBnQGbmNFqJhmeTNptgEZXXEGdRyP5FbFPH0ajstcS0CW5QWXFsovpEcNVlV6omcsXsR7b77896K/FsIggutNybHdM7o96tpTpRidlBhhkHmKhdPUErD2dsjtrtdYWbDYc4g2N4E8eYjmq+eRPZ0n5rFsZXiBo2NBvkX14IhxjqbWtcAIg2e4EQIs4KxTFSjtXZtfDOAePWBgzJMRNhoRIU9nbdfTPqh0k5jJzGeJnd03qe1dsVcUxjSJyuJEete0ZjEj2qi3Z7zMtIjibX93XknXq1Mw6IbUo1QO8cwvBlo3TB3n5LTpUqPZBznNbxJO/UX3+S4AtI00UWudM3VrrqWeLvaNPDOHdqtB/mGniBHRJcF2rtZ9qSVl+U4w9o2ZtjYlQgNLWnSKgqD2vMLrcJgcNAdTp0YOha1hnxC8OxGCoVC7KBTOoIcRPKHxlMxa/Lils/HYzDFzaNV4AMaS3z0aenBaj5YnbXF78xoGgA6WUpXj9L/qVjqDsuIo03gcJaTbc4Ej2eS0Hf9XmCCMK4jf+0EzvjurdxKPT5SlcXsX/AKl4Ou/s35qLjoXlpbpvcDDd+vJdNj9s4ejT7WpVYGRIMg5uAaN56Ki8k0zzXmGP9L8TiC7sX9m0OgNBAdlOhLt532shYf0kxNEGXuEyDIaRmvJBde/E6T4rE/JESlvVUl5fU9OcU8w002zpAaJ5S4n6IVDaO3q7pzV6zHb2y4AGJ0BAGvBWMoLd56e4V1TBva1zxcEhgc7MNMrmtaXEEkaRxNhB8M2hg6tJ2SqxzHRIDwQYOkSBI+S9F2F6V4ltXM+rnpNntA4E2yiC1wBcDJFoM3sr+P8ATSi55ZiadGpRc0wAx7jmGk52jloN44LMzDUS8mwmzq1WzGmBqTYfn0U8VsqrTMPbA46jdoRwsuyw+26Y7waKQIs0NIYBwaYvobxcyp1duU21GElrwSMzXEOYWz3pa6RESPFQv9OGbRIkAxaSY15khWcBQdVI3gG5Jyg7zvuYleuvwGyn0y1lBrQ8WqUqYDuRY4i56TYLlsX6LtLhTwmOo1TmnI8tbUuN7mzm14N0hThMtTl10yaOy6TrljTBMgHKfO0674QK+wqdQl1Oplg95jyBAG4Ej3yrWK9HMfRPrCL3IyNMfhee67ldBcXsc01mB1oGXKdwkOLoHtuk4ucTKrQwDWubUpZZF8rrgGLukakXt7VZp0KxDzVqywTGWBNvWMiw5b7qOCbQplzqbSGz3gTOWx01BEzvQNs4/tG5WAhpkTYCBf4R/SlxC1MqmK2m4AQCDAnPlmPxNbqJ4+So1arn6yTzJPW6M6iXiQSXHfF5HM/IIVKpllpjw113Ss8r06RFFToG5Np9yIHAGBDufTmbJnAkTeOAgTM67iq5oHMdzZ4jyHNZ3tdDuxh47hr8CEdtbMNOpiT9clRqYUOM+6/Tp5qXbZLAAxvgEeZF0nHHw5StPZ96RfdN44zEIrWOLYOUxcQ4Zrcfris77ZrI327wjxEfJE+1ZY7w7wOhgjpJ6pxk5Qu5NA7PBFgO9B3ECYKATAc1okEWz2LeOjvn0Q2bRqNPdqXIiTE+ev6pvtHaE5m9+Qc1ybbyJi9rq8UtKg4uGQuAEGJN7A8OfPWECoYNoJ4yCfZ8VOrRPKNxGhJgmd/6JsJDSYA56k6c9y3MMxKzSqaOcxojqJ5669BwTY54cdYvvj3qrVq24+O4ozMLoTMcoiVivWrAqZmbrfiHD69ylSxTzoS60a7gZiFqBrYLQABHLXeeAVGphnC7TG4b+W5IyJhLGOae9GUH7tiRyJCC6CAbDr8FYfghAOrtdZBO8HWfYoimJNo9g+SWBily3TqB70lGvIMA+387Jle0ds056bnuu4RfyEEaEIP2Zk4choBqTmLe6TlmIyxl8ISSXJIc5iapLwCZAkX4aqq9g1j6gJJLri0rPaAt30dJzG5sHRcjRjiPakkuk6Yl0WGYO0ZYXF7TNm6k9SlTaHueXCcpgTuHABMkvN/jmoYxoDgBaQDaxmNZ1RcK4l1zO7wvZJJZy0guw3kFzRYZoiBoS6QqFJgFaoNQNJ70SL3KdJdMPul0x05um7uk74HxSyDO0cYnzTJLbr40cCJe2b3I8pT7aotGZwEEEQRaL8kklMNpnp7H6NgV6FE1mtqHshd7WuO8akLzv0hpNnPEGXC1gACbACw8Eklv5vtZx25yrintc7KYsOHMKzWcalYNfcNiOUtJNxzSSWP6NR94GIYAXuEy31bmB4aJVqYytdF8szzk39iSSz+G49Y+KxDpZ3jcX84R8GwZ/DidySS3lpyjYtdgb6ttPiq9VgOUcz70kljDxZVjr4E+0q/T9Q6WE6dEkl0yZgJlMHJI3KWKYGuAAt+Up0k9a8Fw4kOm+gv0GnBDoGZcdQAPYUyS3lpzx2ef2gHF0KxWpNAkC/5SmSXGfHQPG91pifVadSdYJ16qWw67nEkmbHXokktz9smO1qsbHTU7gN0o2Bw7TNt070klznTfqpi2AXAHv96SSSsaYnb/2Q==",
  },
  {
    name: "Third slide",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-cgVNYcz5yJ-STMuanEypltgbfcyzvnh0Q&usqp=CAU",
  },
  {
    name: "Four slide",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-cgVNYcz5yJ-STMuanEypltgbfcyzvnh0Q&usqp=CAU",
  },
];

const App = () => (
  <div>
    <Carousel items={items} dots />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));