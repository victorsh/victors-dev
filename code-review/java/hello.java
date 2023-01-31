
class Hello {
  public static void main(String[] args) {
    System.out.println("Hello!");
    System.out.println(sum(1, 2));
    System.out.println(factorial(5));
    System.out.println(binomialCoefficient(5, 2));
  }

  public static int sum(int a, int b) {
    return a + b;
  }

  public static int factorial(int num) {
    int prod = 1;
    for (int i = num; i > 0; i--) {
      prod *= i;
    }
    return prod;
  }

  public static float binomialCoefficient(int n, int k) {
    float bc = factorial(n) / factorial(k) * factorial(n - k);
    return bc;
  }
}