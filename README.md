
## Implementation:

输入1：设置小费比例。例如按逗号分隔，输入"5,10,15,20"，期望能够生成5%，10%，15%，20%的四个按钮。

按钮1：生成建议小费按钮。点击后，根据"输入1"的设置参数，生成对应的一组按钮，分别用于计算相应的小费价格。

输入2：初始价格。例如输入"19.99"。

按钮小费比例1-按钮小费比例N：计算并显示最终价格。点击后，根据本按钮的小费比例，将初始价格、小费价格和最终总价显示出来。


## Some advantages:

1. input separator: comma, enter key, space

2. input validation: warning for non-decimal and non-dot.

3. input: only 1 dot is allowed

4. auto calculation when switch between various rate radios.

5. set default tip rates, plus manually input tip rates.

6. warning remindering when there is wrong input.