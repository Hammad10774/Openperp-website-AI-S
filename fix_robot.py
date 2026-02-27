content = open('src/App.tsx', 'r', encoding='utf-8').read()

old = (
    '          <div className="flex-1 w-full h-[450px] sm:h-[550px] lg:h-[600px] relative order-1">\n'
    '            <div className="absolute inset-0 scale-125 md:scale-100">\n'
    '              <SplineScene\n'
    '                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"\n'
    '                className="w-full h-full"\n'
    '              />\n'
    '            </div>\n'
    '          </div>'
)

new = (
    '          <div className="flex-1 w-full h-[480px] sm:h-[560px] lg:h-[600px] relative order-1">\n'
    '            <SplineScene\n'
    '              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"\n'
    '              className="w-full h-full"\n'
    '            />\n'
    '          </div>'
)

if old in content:
    content = content.replace(old, new)
    open('src/App.tsx', 'w', encoding='utf-8').write(content)
    print("SUCCESS: Fixed the robot wrapper!")
else:
    print("FAIL: Still not matching")
    # print lines 84-91 raw
    lines = content.split('\n')
    for i in range(83, 92):
        print(repr(lines[i]))
