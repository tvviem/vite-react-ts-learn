type RandomNumberType = {
  value: number;
};
type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type Zero = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};
type ReactNumberProps = PositiveNumber | NegativeNumber | Zero;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero
}: ReactNumberProps) => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
      {isZero && 'zero'}
    </div>
  );
};
