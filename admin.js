
const bucket='products';
async function saveProduct(){
 const file=document.getElementById('image').files[0];
 let image='';
 if(file){
  const name=Date.now()+'-'+file.name;
  await supabase.storage.from(bucket).upload(name,file);
  image=supabase.storage.from(bucket).getPublicUrl(name).data.publicUrl;
 }
 await supabase.from('products').insert({title:title.value,description:description.value,category:category.value,image});
 alert('Product Added'); location.reload();
}
async function loadAdmin(){
 const {data}=await supabase.from('products').select('*').order('id',{ascending:false});
 const box=document.getElementById('adminProducts'); box.innerHTML='';
 (data||[]).forEach(p=>box.innerHTML+=`<div class="card" style="margin-bottom:16px"><img src="${p.image||'https://via.placeholder.com/400x300?text=CTC'}"><h3>${p.title}</h3><button onclick="del(${p.id})">Delete</button></div>`);
}
async function del(id){await supabase.from('products').delete().eq('id',id);location.reload();}
loadAdmin();
