import React from "react";
import './diet.css'

const Diet = () => {
    return (
        <>
            <div className="food" id="Diet">
                <h2>Food Nutrition Chart</h2>
            </div>
            <hr />
            <div className="table">
                <table border="2px solid white">
                    <thead>
                        <tr>
                            <td>Food Item</td>
                            <td>Carbohydrates (g)</td>
                            <td>Proteins (g)</td>
                            <td>Fat (g)</td>
                            <td>Vitamins</td>
                            <td>Minerals</td>
                            <td>Water (%)</td>
                            <td>Dietary Fibre (g)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan="8">Fruits</th>
                        </tr>
                        <tr>
                            <td>Apple</td>
                            <td>14</td>
                            <td>0.3</td>
                            <td>0.2</td>
                            <td>C,A,K</td>
                            <td>Pottasium</td>
                            <td>86</td>
                            <td>2.4</td>
                        </tr>
                        <tr>
                            <td>Banana</td>
                            <td>23</td>
                            <td>1.1</td>
                            <td>0.3</td>
                            <td>C,B6</td>
                            <td>Pottasium,Magnesium</td>
                            <td>75</td>
                            <td>2.6</td>
                        </tr>
                        <tr>
                            <td>Orange</td>
                            <td>12</td>
                            <td>0.9</td>
                            <td>0.1</td>
                            <td>C,A</td>
                            <td>Pottasium,Calcium</td>
                            <td>87</td>
                            <td>2.4</td>
                        </tr>
                        <tr>
                            <td>Strawberries</td>
                            <td>8</td>
                            <td>0.8</td>
                            <td>0.3</td>
                            <td>C,K</td>
                            <td>Magnese,Pottasium</td>
                            <td>91</td>
                            <td>2.0</td>
                        </tr>
                        <tr>
                            <th colSpan="8">Vegetables</th>
                        </tr>
                        <tr>
                            <td>Spinach</td>
                            <td>3.6</td>
                            <td>2.9</td>
                            <td>0.4</td>
                            <td>A,C,K,Folate</td>
                            <td>Iron,Calcium,Magnesium</td>
                            <td>91</td>
                            <td>2.2</td>
                        </tr>
                        <tr>
                            <td>Broccoli</td>
                            <td>8</td>
                            <td>2.8</td>
                            <td>0.4</td>
                            <td>A,C,K,Folate</td>
                            <td>Iron,Pottasium</td>
                            <td>89</td>
                            <td>2.6</td>
                        </tr>
                        <tr>
                            <td>Carrot</td>
                            <td>8</td>
                            <td>0.9</td>
                            <td>0.2</td>
                            <td>A,C,K</td>
                            <td>Pottasium</td>
                            <td>95</td>
                            <td>1.2</td>
                        </tr>

                        <tr>
                            <th colSpan="8">Grains</th>
                        </tr>
                        <tr>
                            <td>Brown Rice(cooked)</td>
                            <td>23</td>
                            <td>2.6</td>
                            <td>0.9</td>
                            <td>B Vitamins</td>
                            <td>Selenium,Magnese</td>
                            <td>73</td>
                            <td>1.8</td>
                        </tr>
                        <tr>
                            <td>Whole Wheat Bread</td>
                            <td>49</td>
                            <td>13</td>
                            <td>3.2</td>
                            <td>B Vitamins</td>
                            <td>Selenium,Magnese</td>
                            <td>36</td>
                            <td>8.0</td>
                        </tr>
                        <tr>
                            <td>Oats(uncooked)</td>
                            <td>66</td>
                            <td>17</td>
                            <td>8</td>
                            <td>B Vitamins</td>
                            <td>Magnese,Phosphorus</td>
                            <td>10</td>
                            <td>2.8</td>
                        </tr>
                        <tr>
                            <td>Quinoa(cooked)</td>
                            <td>21</td>
                            <td>4.1</td>
                            <td>1.9</td>
                            <td>Folate,B Vitamins</td>
                            <td>Magnese,Iron</td>
                            <td>72</td>
                            <td>2.8</td>
                        </tr>
                        <tr>
                            <th colSpan="8">Proteins</th>
                        </tr>
                        <tr>
                            <td>Chicken Breast</td>
                            <td>0</td>
                            <td>31</td>
                            <td>3.6</td>
                            <td>Niacin,B6</td>
                            <td>Phosphorus,Selenium</td>
                            <td>65</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Salmons</td>
                            <td>0</td>
                            <td>20</td>
                            <td>13</td>
                            <td>D,B12,B6</td>
                            <td>Pottasium,Selenium</td>
                            <td>67</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Egg Large</td>
                            <td>0.6</td>
                            <td>13</td>
                            <td>11</td>
                            <td>A,D,B2,B12</td>
                            <td>Phosphorus,Selenium</td>
                            <td>75</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Lentils(cooked)</td>
                            <td>20</td>
                            <td>9</td>
                            <td>0.4</td>
                            <td>Folate.Thiamin</td>
                            <td>Iron,Magnese</td>
                            <td>70</td>
                            <td>8.9</td>
                        </tr>
                        <tr>
                            <th colSpan="8">Dairy & Alternatives </th>
                        </tr>
                        <tr>
                            <td>Milk(Whole)</td>
                            <td>5</td>
                            <td>3.4</td>
                            <td>3.3</td>
                            <td>D,B12,Calcium</td>
                            <td>Phosphorus,Calcium</td>
                            <td>88</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Milk(Whole)</td>
                            <td>5</td>
                            <td>3.4</td>
                            <td>3.3</td>
                            <td>D,B12,Calcium</td>
                            <td>Phosphorus,Calcium</td>
                            <td>88</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Greek Yogurt</td>
                            <td>6</td>
                            <td>10</td>
                            <td>5</td>
                            <td>B12,B2</td>
                            <td>Phosphorus,Calcium</td>
                            <td>84</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Cheedar Cheese</td>
                            <td>1.3</td>
                            <td>25</td>
                            <td>33</td>
                            <td>A,B12</td>
                            <td>Phosphorus,Calcium</td>
                            <td>37</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Almonds</td>
                            <td>22</td>
                            <td>21</td>
                            <td>49</td>
                            <td>E,B2</td>
                            <td>Magnesium,Maganese</td>
                            <td>4</td>
                            <td>12.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Diet;