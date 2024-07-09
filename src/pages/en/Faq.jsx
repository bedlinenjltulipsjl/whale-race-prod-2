/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Title from "../../components/en/UI/Title";
import FaqItem from "../../components/en/faq/faq-item";
import gsap from "gsap";
import { LANG } from "../../util/front/language-check";

export default function Faq() {
  useEffect(() => {
    const anim = gsap.fromTo(
      "#faq-wrapper",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "back.out(2)" },
    );
    return () => anim.kill();
  });

  return (
    <>
      <Title>{LANG ? "FAQ" : "Вопросы"}</Title>
      <div
        className="flex flex-col gap-[15px] overflow-y-auto h-[70vh] px-[20px] mt-4"
        id="faq-wrapper"
      >
        <FaqItem
          title={`${LANG ? "What is WhaleRace?" : "Что такое WhaleRace?"}`}
        >
          {LANG ? (
            <div className="flex flex-col gap-2">
              <p>
                WhaleRace is a financial crypto game. Those who act faster than
                others will earn the most profit.
              </p>
              <p>Buy levels, invite friends = get passive income </p>
              <p>
                The more players in the system, the more profit you make. To
                understand how it works and what you need to do, read the
                “tutorial” in the main bot menu.
              </p>
              <p>
                Our goal is 100,000+ active players. After achieving this
                result, we plan to launch our own token and develop the project
                to maximize profitability for participants.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p>
                WhaleRace - это финансовая криптоигра. Те, кто действует быстрее
                других, получит наибольшую прибыль.
              </p>
              <p>
                Покупайте уровни, приглашайте друзей = получайте пассивный доход
              </p>
              <p>
                Чем больше игроков в системе, тем больше прибыли вы получаете.
                Чтобы понять, как это работает и что вам нужно делать,
                прочитайте "обучение" в главном меню бота.
              </p>
              <p>
                Наша цель - 100 000+ активных игроков. После достижения этого мы
                планируем запустить собственный токен и развивать проект чтобы
                обеспечить максимальную доходность для участников.
              </p>
            </div>
          )}
        </FaqItem>
        {/* <FaqItem
          title={`${LANG ? "How to earn more? " : "Как заработать больше?"}`}
        >
          {LANG ? (
            <div className="flex flex-col gap-2">
              <p>
                Our game is completely private. Only those who used someone
                else's invitation link have access.
              </p>
              <p>
                Every new player is someone's referral. You're someone else's
                referral, too.{" "}
              </p>
              <p>
                By sending a link once, you can accumulate thousands of
                referrals that will bring you tens of thousands of dollars in
                profit.
              </p>
              <p>
                Refer as many people as you can to make yourself a passive
                source of income.
              </p>
              <p>
                More detailed instructions on game promotion and referral system
                are in the training. In the main menu.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p>
                Наша игра полностью приватна. Доступ к ней имеют только те, кто
                воспользовался чужой пригласительной ссылкой, имеют доступ.
              </p>
              <p>
                Каждый новый игрок - это чей-то реферал. Вы тоже являетесь
                чьим-то тоже.{" "}
              </p>
              <p>
                Отправив ссылку один раз, вы можете накопить тысячи рефералов,
                которые принесут вам десятки тысяч долларов прибыль.
              </p>
              <p>
                Приглашайте как можно больше людей, чтобы создать себе пассивный
                источником пассивного дохода.
              </p>
              <p>
                Более подробные инструкции по продвижению игры и реферальной
                системе находятся в обучении. В главном меню.
              </p>
            </div>
          )}
        </FaqItem> */}
        <FaqItem
          title={`${LANG ? "How to deposit/withdraw?" : "Как пополнить/вывести средства ?"}`}
        >
          {LANG ? (
            <div className="flex flex-col gap-2">
              <p>To start playing, you need to buy levels. </p>
              <p>1 game coin = 1$ dollar</p>
              <p>
                You can replenish your balance in the "Profile" section using a
                convenient cryptocurrency. The currency rate is converted
                automatically.
              </p>
              <p>
                If you don't have cryptocurrency, you can open the "tutorial" in
                the bot menu and read the instructions on how to buy any token
                in 10 minutes. You can do it from a card, e-money or bank.
              </p>
              <p>
                In the process of the game you can withdraw profits. To do this,
                create a request in the "profile" section and wait for
                confirmation from the moderator. It will take up to 48 hours.
              </p>
              <p>
                Carefully check the address of the wallet and cryptocurrency you
                have chosen.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p>Чтобы начать играть, вам нужно купить уровни. </p>
              <p>1 игровая монета = 1 доллар</p>
              <p>
                Пополнить баланс можно в разделе "Профиль", используя удобную
                криптовалюту. Курс валюты конвертируется автоматически.
              </p>
              <p>
                Если у вас нет криптовалюты, вы можете открыть "обучение" в меню
                бота и прочитать инструкцию о том, как купить любой токен за 10
                минут. Сделать это можно с карты, электронными деньгами или
                через банк.
              </p>
              <p>
                В процессе игры вы можете вывести прибыль. Для этого, создайте
                заявку в разделе "Профиль" и дождитесь подтверждения от
                модератора. Это займет до 48 часов.
              </p>
              <p>
                Внимательно проверьте адрес кошелька и выбранной вами
                криптовалюты.
              </p>
            </div>
          )}
        </FaqItem>
        <FaqItem title={`${LANG ? "Referral system" : "Реферальная система"}`}>
          {LANG ? (
            <div className="flex flex-col gap-2">
              <p>
                Buying levels is a small part of the game. Inviting friends and
                new players can multiply your income x100 times. The game is
                private and available only by invitation link. This means that
                absolutely every player is invited by someone. You are too.
              </p>
              <p>If a person runs a bot using your link:</p>
              <p>
                - You get 13% instantly from purchases of any level of your
                friend.
              </p>
              <p>
                - You get 8% instantly from level purchases from all the people
                your friends have invited
              </p>
              <p>
                - You get 5% instantly from all purchases of player levels that
                were invited by people who were invited by your friends.
              </p>
              <p>
                Thus, if you start giving your link as actively as possible,
                eventually you will be able to accumulate 50, 300, or maybe
                1000+ referrals without doing anything, which will give you a
                huge income!
              </p>
              <p>
                Invite 10+ active friends = get 10,000+ other referrals
                passively! Who started doing this earlier = gets richer!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p>
                Покупка уровней - это лишь малая часть игры. Приглашение друзей
                и новых игроков может умножить ваш доход в 100 раз. Игра
                является приватной и доступна только по пригласительной ссылке.
                Это значит, что абсолютно каждый игрок кем-то приглашен. И вы
                тоже.
              </p>
              <p>Если человек запускает бота по вашей ссылке:</p>
              <p>
                - Вы получаете 13 % мгновенно от покупок любого уровня вашего
                друг.
              </p>
              <p>
                - Вы получаете 8% мгновенно от покупок уровня у всех людей,
                которых пригласили ваши друзья.
              </p>
              <p>
                - Вы получаете 5% мгновенно от всех покупок игроков уровня,
                которые были приглашены людьми, приглашенными вашими друзьями.
              </p>
              <p>
                Таким образом, если вы начнете давать свои ссылки как можно
                активнее, то со временем вы сможете накопить 50, 300, а может
                быть 1000+ рефералов, ничего не делая, что даст вам огромный
                доход!
              </p>
              <p>
                Пригласите 10+ активных друзей = получите 10 000+ других
                рефералов пассивно! Кто начал делать это раньше = становится
                богаче!
              </p>
            </div>
          )}
        </FaqItem>
        <FaqItem title={`${LANG ? "Frequent questions" : "Частые вопросы"}`}>
          {LANG ? (
            <div className="flex flex-col gap-2">
              <p>
                Can I create different accounts? - Yes, you can play from an
                unlimited number of telegram accounts. That's not a problem.
                This way you can earn more.
              </p>
              <p>
                Is it a pyramid scheme? - Yes, it's a game format where those
                who start the earliest can earn the most. We're not hiding that
                fact. Our strength in marketing is enough to keep the project
                running for a long time.
              </p>
              <p>
                What happens at the end? - After we get a lot of active users we
                will develop our token. We want to distribute the finances and
                make a unique story in which each of the players can
                participate.
              </p>
              <p>
                There are no rules in your game? - No, before you start you
                agreed to the terms and conditions. We stay within the law and
                make an honest project. Always be careful not to interact with
                project fakes and scammers.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p>
                Могу ли я создавать разные аккаунты? - Да, вы можете играть с
                неограниченного количества аккаунтов в Telegram. Это не
                проблема. Так вы сможете зарабатывать больше.
              </p>
              <p>
                Является ли это финансовой пирамидой? - Да, это формат игры, в
                которой больше всего зарабатывают те, кто начинает раньше всех.
                Мы не скрываем этого факта. Наших сил в маркетинге хватит, чтобы
                поддерживать проект на протяжении долгого времени.
              </p>
              <p>
                Что произойдет в конце? - После того как у нас появится много
                активных пользователей, мы будем развивать наш токен. Мы хотим
                распределить финансы и сделать уникальную историю, в которой
                сможет принять участие каждый из игроков.
              </p>
              <p>
                В вашей игре нет правил?- Нет, перед началом игры вы согласились
                с правилами и условиями. Мы не нарушаем закон и делаем честный
                проект. Всегда будьте осторожны и не взаимодействуйте с
                фейковыми проектами и мошенниками.
              </p>
            </div>
          )}
        </FaqItem>
      </div>
    </>
  );
}
