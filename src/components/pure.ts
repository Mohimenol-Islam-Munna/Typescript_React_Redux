export function myFunc(
  data: { name: string; isPassed: boolean; id: number },
  name: keyof { name: string; isPassed: boolean; id: number }
) {
  console.log("my info :", data[`${name}`]);
  return data;
}

export const myFuncTwo = (data: {
  name: string;
  isPassed: false;
  id: number;
}) => {
  console.log("my info two :", data);
  return data;
};
