1. Created with SCSS
2. Contains navbar and sidebar made using Angular Material.
3. Has basic routing.
4. Has a custom directive - `appHighlight`.
5. Demonstrates simple two way binding.
6. The SCSS files are written in common CSS. [To be converted to SCSS]



## Custom Directives

- We can create our own directives, such as `appHighlight` directive.
- To create a directive, we have to use `ng generate directive highlight` or `ng g d highlight`.
- Then in `highlight.directive.ts` file, we can add `constructor(private element: ElementRef, private renderer: Renderer2) { }`.
- ElementRef gives us access to the element that the directive is on.
- To put a directive on an element, we have to add `appHighlight` in the element.
- Eg: `<p appHighlight>Highlight me!</p>`.
- Renderer2 is used to modify the element.
- We can use `element.nativeElement` to get the element, and we can use `renderer.setStyle()` to set the style.
- `@HostListener()` to listen to events, such as `@HostListener('mouseenter') onMouseEnter() { }`.
- `this.renderer.setStyle(
  this.element.nativeElement,
  'background-color',
  this.color
  );` to set the style.


### Event Binding
- This goes from the DOM to the component or UI to class.
- Eg: `(click)="onSave()"`.


### Property Binding
- This goes from the component to the DOM or class to UI.
- Eg: `[disabled]="isDisabled"`.


## Two Way Binding
- This binding goes from the DOM to the component and vice versa.
- It is a combination of property binding and event binding.
- We can use `[(ngModel)]` to create two way binding.
- It is called banana in a box.
- Eg: `<input type="text" [(ngModel)]="name">`.
- `<h1>{{name}}</h1>`.
- This taked the value from the input and puts it in the name property.
