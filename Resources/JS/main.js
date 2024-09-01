const timeContainer = document.getElementById("time-container");
    const BIRTH_DAY = "1999-07-30";
    const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
      );

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);