import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import { LANG } from "./language-check";

export const groupTransactionsByDate = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    const date = LANG
      ? format(parseISO(transaction.createdAt), "MMMM dd")
      : format(parseISO(transaction.createdAt), "dd MMMM", { locale: ru });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(transaction);
    return acc;
  }, {});
};
