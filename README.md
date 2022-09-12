# ads_front
Интерфейс для работы с объявлениями.
<p><h3>Страницы:</h3>
<ul>
  <li>/create - страница создания объявления. Загруженные изображения хранятся по пути view/images</li>
  
  <li>/ads/{<strong>pageNumber</strong>}?isPriceSort={<strong>sortDirection</strong>}&isTimeSort={<strong>sortDirection</strong>} - 
   страница со списком объявлений. 
  <ul>
    <li>pageNumber - номер страницы объявлений. </li>
    <li>sortDirection - направление сортировки (-1 - DESC, 0 - без сортировки, 1 - ASC)</li>
  </ul>
  </li>
  
  <li>/ad/{<strong>id</strong>} - 
    страница с детальной информацией объявления. 
  <ul>
    <li>id - идентификатор объявления</li>
  </ul>
  </li>
</ul>
