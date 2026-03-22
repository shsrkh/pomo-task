interface ISequence {
  id: number;
  [key: string]: any;
}

export const incSequence = (data: ISequence[]): number => {
  if (data.length === 0) {
    return 0; // Если массив пустой, возвращаем 0
  }

  return data
    .sort((a, b) => b.id - a.id)
    .slice(0, 1)[0].id + 1; // Иначе продолжаем как было
}
