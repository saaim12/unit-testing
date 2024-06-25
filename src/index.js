export function max(a, b) {
  return a > b ? a : b;
}
export function permission(age) {
    return age < 18 ? "not allowed" : "allowed";
}
export function factorial(n){
    if (n == 0)
        return 1;
    else
        return (n * factorial(n - 1));
}