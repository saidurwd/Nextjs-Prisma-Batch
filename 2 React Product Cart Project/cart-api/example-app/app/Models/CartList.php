<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CartList extends Model
{
    protected $fillable = ['user_id','product_id'];

    public function product(): BelongsTo
    {
        return $this->belongsTo(ProductList::class);
    }
}
